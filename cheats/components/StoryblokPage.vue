<script>
import { getMode, loadData, getPath } from '~/plugins/helpers'

export default {
  data() {
    return { story: { content: {} } }
  },
  // eslint-disable-next-line require-await
  async asyncData(context) {
    return loadData({
      version: getMode(context),
      api: context.app.$storyapi,
      cacheVersion: context.store.state.storyblok.cacheVersion,
      errorCallback: context.error,
      path: getPath(context)
    })
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        // Inject content on the input event
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        // Reload the page on save events
        window.location.reload()
      }
    })
  }
}
</script>
