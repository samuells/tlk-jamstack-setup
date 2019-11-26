<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component :is="story.content.component" :story="story" />
</template>

<script>
/* eslint-disable vue/no-unused-components */
import StoryblokPage from '~/components/StoryblokPage.vue'
import Placeholder from '~/components/Placeholder'

export default {
  components: {
    Placeholder
  },
  extends: StoryblokPage
}
</script>
