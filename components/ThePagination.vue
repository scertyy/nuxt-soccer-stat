<script setup>
defineProps({
  pages: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 0,
  },
})
defineEmits(['changePage'])
</script>

<template>
  <div class="the-pagination">
    <div
      v-for="i in pages"
      :key="i"
      class="the-pagination__button"
      :class="{'the-pagination__button_active': currentPage === i}"
      @click="$emit('changePage', i)"
    >
      {{ i }}
    </div>
  </div>
</template>

<style lang="sass" scoped>
.the-pagination
  display: flex
  align-items: center

  &__button
    border: 2px solid var(--violet)
    background: var(--white)
    border-radius: 5px
    @include Montserrat500()
    font-size: 1.25rem
    width: 35px
    height: 35px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer

    color: var(--text)

    &_active
      color: var(--white)
      background: var(--violet)

    + .the-pagination__button
      margin-left: 5px
</style>
