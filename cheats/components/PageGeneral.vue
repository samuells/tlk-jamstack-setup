<template>
  <div v-editable="story.content">
    <component
      :is="blok.component"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script>
import Placeholder from '~/components/Placeholder'

export default {
  components: {
    Placeholder
  },
  props: {
    story: {
      type: Object,
      required: true
    }
  }
}
</script>
