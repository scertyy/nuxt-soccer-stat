<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <div v-if="loading" class="preloader">
      <ThePreloader />
    </div>
    <slot v-else />
  </div>
</template>

<style lang="sass" scoped>
.preloader
  display: flex
  align-items: center
  justify-content: center
  margin: 30px 0
</style>
