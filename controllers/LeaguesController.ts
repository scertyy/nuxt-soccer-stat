import http from '~/services/http'
import { League } from '~/models/League'
import { useLoading } from '~/composables/useLoading'
import { LeaguesType } from '~/types/leagues'
import { ParametersType } from '~/types/parameters'

export function LeaguesController (): LeaguesType {
  const { loading, loadingOn, loadingOff } = useLoading()

  const leagues = ref([])
  function getLeaguesList (params: ParametersType): Promise<any> {
    loadingOn()
    return http.get('competitions/', params)
      .then(r => r.data)
      .then((data) => {
        leagues.value = data.competitions.map(i => new League(i))
      })
      .finally(() => {
        loadingOff()
      })
  }

  const league = ref({})
  function getLeague (id: number | string, params: ParametersType): Promise<any> {
    loadingOn()
    return http.get(`competitions/${id}/`, params)
      .then(r => r.data)
      .then((data) => {
        league.value = new League(data)
      })
      .finally(() => {
        loadingOff()
      })
  }

  return {
    getLeaguesList,
    getLeague,
    leagues,
    league,
    loading,
  }
}
