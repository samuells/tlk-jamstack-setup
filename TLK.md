# Beauty of the JAMstack Setup

```bash
$ yarn create nuxt-app .
```

- create new project on Storyblok

```bash
$ yarn add storyblok-nuxt
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

- added pages & components

- deploy to now

```bash
$ now secrets add sb_token_tlk "token"
```

```add to package
"engines": {
    "node": ">= 10.0.0"
  },
```

```bash
$ now
```

🤞CROSS FINGERS 🤞
