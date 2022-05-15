<script setup>
defineProps({
  errorMessage: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <slot v-else />
  </div>
</template>

<style lang="sass" scoped>
.error-message
  @include Montserrat600()
  font-size: 1.5rem
  line-height: 120%
  color: var(--heading)
  margin: 30px 0
</style>
