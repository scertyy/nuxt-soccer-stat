import leagueDefault from '@/assets/images/league-default.png'
import { Season } from '~/models/Season'
import dateMapper from '~/services/dateMapper'

export class League {
  constructor (props = {}) {
    this.id = props.id
    this.name = props.name
    this.plan = props.plan
    this.code = props.code || 'Unknown league code'
    this.emblemUrl = props.emblemUrl || leagueDefault
    this.numberOfAvailableSeasons = props.numberOfAvailableSeasons || 0
    this.area = props.area
    this.currentSeason = props.currentSeason
      ? new Season(props.currentSeason)
      : new Season({})

    this.seasons = props.seasons
      ? props.seasons.map(i => new Season(i))
      : []
  }

  get leagueLevel () {
    switch (this.plan) {
      case 'TIER_ONE': {
        return 1
      }
      case 'TIER_TWO': {
        return 2
      }
      case 'TIER_THREE': {
        return 3
      }
      case 'TIER_FOUR': {
        return 4
      }
      default: return 'неизвестно'
    }
  }

  get currentSeasonPeriod () {
    return `${dateMapper.getDdMmYyyy(this.currentSeason.startDate)} - ${dateMapper.getDdMmYyyy(this.currentSeason.endDate)}`
  }

  get leagueMeta () {
    return [
      {
        label: 'Уровень лиги',
        value: this.leagueLevel,
      },
      {
        label: 'Доступно сезонов',
        value: this.numberOfAvailableSeasons,
      },
      {
        label: 'Текущий сезон',
        value: this.currentSeasonPeriod,
      },
      {
        label: 'Текущий игровой день',
        value: this.currentSeason.currentMatchday,
      },
      {
        label: 'Победитель текущего сезона',
        logo: this.currentSeason.winner.crestUrl,
        value: this.currentSeason.winner.shortName,
      },
      {
        label: 'Место проведения',
        value: `${this.area.name} | ${this.area.countryCode}`,
      },
    ]
  }
}
