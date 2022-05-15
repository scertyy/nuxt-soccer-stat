<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
})

const router = useRouter()
const goBack = () => {
  if (props.to.length) {
    router.push(props.to)
    return
  }

  router.go(-1)
}

</script>

<template>
  <div class="back-link" @click="goBack">
    <div class="back-link__caption">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="sass">
.back-link
  cursor: pointer

  display: inline-flex
  align-items: center

  &__caption
    @include Montserrat700()
    font-size: 1rem
    color: var(--black)
</style>
