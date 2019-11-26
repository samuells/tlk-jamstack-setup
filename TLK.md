# Beauty of the JAMstack Setup

```bash
$ yarn create nuxt-app .
```

```bash
$ yarn add -D storyblok-nuxt
```

- create new project on Storyblok

- add to nuxt.config.js

```js
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
STORYBLOK_TOKEN='UXn5b738U7Y7wMdhwUTTZQtt'
```
