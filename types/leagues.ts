import { Ref } from 'vue'
import { League } from '~/models/League'

export type LeaguesType = {
    getLeaguesList: (p: any) => void,
    getLeague: (p: any) => void,
    leagues: Ref<Array<League>>,
    league: Ref<League>,
    loading: Ref<boolean>,
    pagination?: any
}
