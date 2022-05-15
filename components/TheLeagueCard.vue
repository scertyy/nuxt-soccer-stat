<script setup>
import { League } from '../models/League'

defineProps({
  league: League,
})

</script>

<template>
  <NuxtLink :to="{ name: 'leagues-league_id', params: { league_id: league.id } }" class="league-card">
    <div class="league-card__logo">
      <img :src="league.emblemUrl" alt="">
    </div>
    <div class="league-card__info">
      <div class="league-card__name">
        {{ league.name }} | {{ league.code }}
      </div>
      <TheLeagueMeta :league-meta="league.leagueMeta" />
    </div>
  </NuxtLink>
</template>

<style lang="sass" scoped>
.league-card
  border-radius: 15px
  border: 2px solid var(--violet)
  background: var(--white)
  transition: all .3s ease
  text-decoration: none

  &:hover
    box-shadow: 3px 3px 10px var(--violet)
    transform: scale(1.01)

  &__logo
    width: 100%
    background-color: var(--main)
    padding: 15px
    border-radius: 15px
    height: 250px
    display: flex
    align-items: center
    justify-content: center

  &__info
    padding: 15px 30px 30px

  &__name
    @include Montserrat600()
    font-size: 1.5rem
    color: var(--heading)
    margin-bottom: 10px
</style>
