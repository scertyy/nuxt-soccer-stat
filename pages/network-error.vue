<script setup lang="ts">
definePageMeta({
  title: 'Ошибка соединения',
  layout: 'the-main-layout',
})
</script>

<template>
  <NuxtLayout>
    <TheH1>
      Ошибка соединения
    </TheH1>
    <TheDescription class="error__description">
      Данная ошибка может возникать в результате плохого интернет-соединения или слишком частых запросов к API.
    </TheDescription>
    <TheDescription class="error__description">
      Подождите какое-то время и попробуйте снова
    </TheDescription>
    <TheBacklink class="error__back-link">
      Назад
    </TheBacklink>
  </NuxtLayout>
</template>

<style lang="sass" scoped>
.error
  &__description
    margin-top: 10px

  &__back-link
    margin-top: 30px
</style>
