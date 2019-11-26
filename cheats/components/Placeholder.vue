<template>
  <div
    v-editable="blok"
    :class="blok.is_done ? 'border-green' : 'border-red'"
    class="container mx-auto my-8 px-4 py-4 border-2 border-dashed placeholder"
  >
    <h2
      :class="blok.is_done ? 'text-green' : 'text-red'"
      class="text-2xl py-2 text-center"
    >
      {{ blok.name }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss"></style>
