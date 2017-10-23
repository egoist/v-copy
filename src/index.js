import mcopy from 'modern-copy'

export const copy = {
  bind(el, { value, arg }) {
    if (arg === 'callback') {
      el.$copyCallback = value
    } else {
      el.$copyValue = value
      const handler = () => {
        mcopy(el.$copyValue)
        if (el.$copyCallback) {
          el.$copyCallback(el.$copyValue)
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
    if (arg === 'callback') {
      el.$copyCallback = value
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
