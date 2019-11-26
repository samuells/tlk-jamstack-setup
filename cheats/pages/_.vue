<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component :is="story.content.component" :story="story" />
</template>

<script>
/* eslint-disable vue/no-unused-components */
import StoryblokPage from '~/components/StoryblokPage.vue'
import PageGeneral from '~/components/PageGeneral.vue'

export default {
  components: {
    PageGeneral
  },
  extends: StoryblokPage
}
</script>
