import mcopy from 'modern-copy'

export const copy = {
  bind(el, { value, arg }) {
    if (arg === 'success') {
      el.$copySuccess = value
    } else if (arg === 'failure') {
      el.$copyFailure = value
    } else {
      el.$copyValue = value
      const handler = () => {
        const isCopied = mcopy(el.$copyValue)
        if (isCopied && el.$copySuccess) {
          el.$copySuccess(el.$copyValue)
        }
        if (!isCopied && el.$copyFailure) {
          el.$copyFailure(el.$copyValue)
        }
      }
      el.addEventListener('click', handler)
      el.$destroyCopy = () => el.removeEventListener('click', handler)
    }
  },

  unbind(el) {
    el.$destroyCopy()
  },

  componentUpdated(el, { value, arg }) {
    if (arg === 'success') {
      el.$copySuccess = value
    } else if (arg === 'failure') {
      el.$copyFailure = value
    } else {
      el.$copyValue = value
    }
  }
}

const install = Vue => {
  Vue.directive('copy', copy)
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
