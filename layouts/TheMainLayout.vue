<script setup lang="ts">
const route = useRoute()

useHead({
  title: `SoccerStat - ${route.meta.title}`,
  meta: [{ name: 'og:title', content: `SoccerStat - ${route.meta.title}` }],
})
</script>

<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.main-layout
  background: var(--main)
  padding: 50px 30px
  min-height: calc(100vh - $header-height)
</style>
