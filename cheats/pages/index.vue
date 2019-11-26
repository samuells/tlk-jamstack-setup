<template>
  <main v-editable="story.content">
    <component
      :is="blok.component"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    />
  </main>
</template>

<script>
import Placeholder from '~/components/Placeholder'
import StoryblokPage from '~/components/StoryblokPage'

export default {
  components: {
    Placeholder
  },
  extends: StoryblokPage
}
</script>
