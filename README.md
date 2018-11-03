# v-copy

Vue directive to copy to clipboard.

## Install

```bash
yarn add v-copy
```

CDN: [UNPKG](https://unpkg.com/v-copy/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-copy/) (It's automatically installed as global directive `v-copy` in CDN)

## Usage

First register the directive globally:

```js
import Copy from 'v-copy'

Vue.use(Copy)
```

Or locally:

```js
import { copy } from 'v-copy'

export default {
  directives: {
    copy
  }
}
```

Then use it in template:

```vue
<template>
  <button v-copy="`some text`">Copy!</button>
</template>
```

**`v-copy:success`**: executed after text is copied to clipboard.

**`v-copy:failure`**: executed after text could not be copied to clipboard.

```vue
<template>
  <button
    v-copy="`some text`"
    v-copy:success="handleCopySuccess"
    v-copy:failure="handleCopyFailure">Copy!
  </button>
</template>

<script>
export default {
  methods: {
    handleCopySuccess(text) {
      alert(`Copied: ${text}`);
    },
    handleCopyFailure(text) {
      alert(`Not copied: ${text}`);
    },
  },
};
</script>
```

## Browser support

This supports what [copy-text-to-clipboard](https://github.com/sindresorhus/copy-text-to-clipboard) supports, namely ever-green browsers and IE9+. (Not all are carefully tested though :P)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
