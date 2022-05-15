<template>
  <p class="the-description">
    <slot />
  </p>
</template>

<style lang="sass" scoped>
.the-description
  @include Montserrat400()
  font-size: 1rem
  line-height: 110%
  color: var(--text)
</style>
