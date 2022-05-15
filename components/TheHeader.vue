<script setup lang="ts">
type Link = {
  name: {
    name: string
  },
  caption: string
}

const indexLink: Link = {
  name: { name: 'index' },
  caption: 'SoccerStat',
}

const links: Array<Link> = [
  {
    name: { name: 'leagues' },
    caption: 'Лиги',
  },
  {
    name: { name: 'teams' },
    caption: 'Команды',
  },
]
</script>

<template>
  <header class="header">
    <NuxtLink
      class="header__link header__link_main"
      :to="indexLink.name"
    >
      {{ indexLink.caption }}
    </NuxtLink>
    <div class="header__nav">
      <NuxtLink
        v-for="link in links"
        :key="link.caption"
        class="header__link header__link_secondary"
        :to="link.name"
      >
        {{ link.caption }}
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header
  width: 100%
  height: $header-height
  background: black

  padding: 0 30px
  display: flex
  align-items: center
  justify-content: space-between

  &__nav
    display: flex
    align-items: center

  &__link
    @include Montserrat700()
    text-decoration: none

    &_main
      font-size: 2rem
      color: var(--white)

    &_secondary
      font-size: 1.5rem
      color: var(--white)

      + .header__link_secondary
        margin-left: 30px
</style>
