<script setup lang="ts">
definePageMeta({
  title: 'Главная',
  layout: 'the-main-layout',
})
</script>

<template>
  <NuxtLayout>
    <TheH1>
      О приложении
    </TheH1>
    <div class="index__description">
      <TheDescription>
        Данный пет-проект был разработан
        <a href="mailto:scertyy@yandex.ru" class="index__link">scertyy</a>
        в рамках изучения технологии Nuxt
      </TheDescription>
    </div>
    <div class="index__description">
      <TheDescription>
        Он представляет собой навигацию по футбольным лигам и командам при помощи Демо-Апи
        <a
          href="https://www.football-data.org/"
          class="index__link"
          target="_blank"
        >https://www.football-data.org/</a>
      </TheDescription>
    </div>
  </NuxtLayout>
</template>

<style lang="sass" scoped>
.index
  &__description
    margin: 20px 0

  &__link
    color: var(--red)
    font-weight: bold
</style>
