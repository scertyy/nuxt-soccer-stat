export class Team {
  constructor (props = {}) {
    this.id = props.id
    this.name = props.name || 'Неизвестно'
    this.shortName = props.shortName || 'Неизвестно'
    this.abbr = props.tla || '?'
    this.crestUrl = props.crestUrl
  }
}
