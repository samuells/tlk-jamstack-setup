<template>
  <main v-editable="story.content">
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component
      :is="blok.component"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    />
  </main>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Placeholder from '~/components/Placeholder'
import StoryblokPage from '~/components/StoryblokPage'

export default {
  components: {
    Placeholder
  },
  extends: StoryblokPage
}
</script>
