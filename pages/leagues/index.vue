<script setup lang="ts">
import { LeaguesController } from '~/controllers/LeaguesController'
import ThePagination from '~/components/ThePagination.vue'
import { useFilters } from '~/composables/useFilters'
import debounce from '~/helpers/debounce'

const { getLeaguesList, leagues, loading } = LeaguesController()
const { filters, pagination } = useFilters()

const route = useRoute()
const router = useRouter()

const filtersLocal = reactive({
  search: '',
  page: null,
})
for (const [key, value] of Object.entries(route.query)) {
  filtersLocal[key] = value
}
getLeaguesList()
  .then(() => {
    filters.initData(leagues.value)
    filters.updateListByFilters({ ...filtersLocal })
  })

watch(() => filters.query, (newQuery) => {
  router.replace(
    {
      query: newQuery,
    },
  )
}, { deep: true })

const updateSearch = () => {
  debounce.do(
    () => filters.updateListByFilters({ ...filtersLocal }),
    400)
}
</script>

<template>
  <div class="leagues">
    <div class="leagues__row">
      <TheH1>Лиги</TheH1>
      <TheSearchInput
        v-model="filtersLocal.search"
        @update:modelValue="updateSearch"
      />
    </div>
    <div class="leagues__main">
      <TheLoadingLayout :loading="loading">
        <div class="leagues__list">
          <TheLeagueCard
            v-for="league in filters.list"
            :key="league.id"
            :league="league"
          />
        </div>
      </TheLoadingLayout>
      <ThePagination
        class="leagues__pagination"
        :pages="pagination.pagesCount"
        :current-page="pagination.page"
        @changePage="filters.updatePage($event)"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.leagues

  &__main
    width: 100%
    display: flex
    align-items: center
    flex-direction: column
    margin-top: 60px

  &__list
    display: grid
    grid-template-columns: repeat(3, minmax(1px, 1fr))
    grid-gap: 30px 15px

  &__row
    display: flex
    align-items: center
    justify-content: space-between

  &__pagination
    margin-top: 30px
</style>
