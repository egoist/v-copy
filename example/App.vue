<template>
  <div id="app">
    <textarea v-model="text"></textarea>
    <button v-copy="text" v-copy:callback="handleClick">Copy</button>
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
    handleClick(text) {
      alert(`Copied ${text}`)
    }
  }
}
</script>
