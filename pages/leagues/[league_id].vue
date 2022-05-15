<script setup lang="ts">
import { LeaguesController } from '~/controllers/LeaguesController'
import TheLeagueMeta from '~/components/TheLeagueMeta.vue'

const route = useRoute()

const leagueId = route.params.league_id
const { getLeague, loading, league } = LeaguesController()

const error = ref(null)
getLeague(leagueId)
  .catch((err) => {
    error.value = err.response.data.message
  })
</script>

<template>
  <div class="league">
    <TheBacklink>Назад</TheBacklink>
    <TheLoadingLayout :loading="loading">
      <TheErrLayout :error-message="error">
        <TheH1 class="league__heading">
          {{ league.name }}
        </TheH1>
        <div class="league__info">
          <div class="league__logo">
            <img :src="league.emblemUrl" alt="">
          </div>
          <div class="league__meta">
            <TheLeagueMeta :league-meta="league.leagueMeta" />
          </div>
        </div>
      </TheErrLayout>
    </TheLoadingLayout>
  </div>
</template>

<style lang="sass" scoped>
.league
  &__heading
    margin: 20px 0

  &__info
    display: grid
    grid-template-columns: minmax(1px, 1fr) minmax(1px, 1fr)
    max-width: 900px
    grid-gap: 30px

  &__meta, &__logo
    border-radius: 15px
    background: var(--white)
    padding: 15px
</style>
