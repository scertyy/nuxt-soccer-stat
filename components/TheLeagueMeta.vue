<script setup>
defineProps({
  leagueMeta: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="league-meta">
    <div
      v-for="(item, index) in leagueMeta"
      :key="index"
      class="league-meta__item"
    >
      <div class="league-meta__label">
        {{ item.label }}
      </div>
      <div class="league-meta__value">
        <img v-if="item.logo" class="league-meta__team-crest" :src="item.logo" alt="">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.league-meta
  display: grid
  grid-gap: 8px

  &__item
    @include Montserrat400()
    font-size: 1.125rem
    color: var(--text)

    display: flex
    align-items: center
    justify-content: space-between

  &__value
    font-weight: bold

    display: flex
    align-items: center
    justify-content: flex-end
    text-align: right

  &__team-crest
    height: 20px
    margin-right: 8px
</style>
