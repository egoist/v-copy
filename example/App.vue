<template>
  <div id="app">
    <textarea v-model="text"></textarea>
    <button
      v-copy="text"
      v-copy:success="handleCopySuccess"
      v-copy:failure="handleCopyFailure"
    >Copy</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'The text that is to be copied'
    }
  },

  methods: {
    handleCopySuccess(text) {
      alert(`Copied: ${text}`)
    },

    handleCopyFailure(text) {
      alert(`Not copied: ${text}`)
    }
  }
}
</script>
