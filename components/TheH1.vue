<template>
  <h1 class="the-h1">
    <slot />
  </h1>
</template>

<style lang="sass" scoped>
.the-h1
  @include Montserrat700()
  font-size: 2.5rem
  color: var(--heading)
  line-height: 120%
</style>
