import { Team } from '~/models/Team'

export class Season {
  constructor (props = {}) {
    this.id = props.id
    this.startDate = props.startDate
    this.endDate = props.endDate
    this.currentMatchday = props.currentMatchday || 0

    this.winner = props.winner
      ? new Team(props.winner)
      : new Team({})
  }
}
