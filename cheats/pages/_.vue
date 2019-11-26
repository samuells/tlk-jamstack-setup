<template>
  <component :is="story.content.component" :story="story" />
</template>

<script>
import StoryblokPage from "~/components/StoryblokPage.vue";
import Placeholder from "~/components/Placeholder";

export default {
  components: {
    Placeholder
  },
  extends: StoryblokPage
};
</script>
