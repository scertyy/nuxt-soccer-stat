<script setup>
import searchIcon from '~/assets/images/search.svg'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Поиск',
  },
})
const emits = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value),
})
</script>

<template>
  <div class="the-search">
    <input
      v-model="value"
      type="text"
      class="the-search__input"

      :placeholder="placeholder"
    >
    <img class="the-search__icon" :src="searchIcon" alt="">
  </div>
</template>

<style lang="sass" scoped>
.the-search
  width: 100%
  max-width: 320px
  border: 2px solid var(--violet)
  padding: 5px 10px
  border-radius: 15px
  display: flex
  align-items: center
  background: var(--white)

  &__input
    width: 100%
    margin-right: 5px
    background: inherit
    border: none
    @include Montserrat400()
    font-size: 1.125rem
    line-height: 120%
    color: var(--black)

    &::placeholder
      color: var(--lynch)

  &__icon
    flex-shrink: 0
    width: 25px
</style>
