# Beauty of the JAMstack Setup

```bash
$ yarn create nuxt-app .
```

- create new project on Storyblok

```bash
$ yarn add -D storyblok-nuxt
```

- add to nuxt.config.js

```js
require('dotenv').config()
const StoryBlokToken = process.env.STORYBLOK_TOKEN

modules: [
  'storyblok-nuxt',
  {
    accessToken: StoryBlokToken,
    cacheProvider: 'memory'
  }
],
```

- define the storyblok token in .env

```
STORYBLOK_TOKEN='xxx'
```

- load storyblok cache - middleware/store/helpers

```nuxt.config.js
router: {
    middleware: [
      'cache-version-loader'
    ]
  },
```
