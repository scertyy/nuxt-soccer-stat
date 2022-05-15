const monthsParentalCase = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
const monthsShortCase = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'нояб.', 'дек.']
const monthsShort = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'нояб', 'дек']

class DateMapper {
  getDdMmYy (d) {
    const date = new Date(d)
    return date.getDate().toString().padStart(2, '0') +
        '.' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '.' +
        date.getFullYear().toString().slice(2)
  }

  getDdMmYyyy (d) {
    const date = new Date(d)
    return date.getDate().toString().padStart(2, '0') +
        '.' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '.' +
        date.getFullYear().toString()
  }

  getDdMmm (d) {
    const date = new Date(d)
    return date.getDate().toString().padStart(2, '0') +
        ' ' +
        monthsShort[date.getMonth()]
  }

  getDdMmmm (d) {
    const date = new Date(d)
    return date.getDate().toString().padStart(2, '0') +
        ' ' +
        monthsParentalCase[date.getMonth()]
  }

  getDdMmmmYyyy (d) {
    const date = new Date(d)
    return date.getDate().toString().padStart(2, '0') +
        ' ' +
        monthsParentalCase[date.getMonth()] +
        ' ' +
        date.getFullYear().toString()
  }

  getDdMmmYy (d) {
    const date = new Date(d)
    return date.getDate().toString().padStart(2, '0') +
        ' ' +
        monthsShortCase[date.getMonth()] +
        ' ' +
        date.getFullYear()
  }

  getVerbalDate (d) {
    const date = new Date(d)

    const startOfToday = new Date().setHours(0, 0, 0, 0)
    if (date > startOfToday) {
      return 'Сегодня'
    }

    const daysSpan = (startOfToday - date) / (1000 * 60 * 60 * 24)
    if (daysSpan <= 1) {
      return 'Вчера'
    }

    if (daysSpan <= 2) {
      return 'Позавчера'
    }

    return 'Давно'
  }

  getPseudoISOWithoutTime (d) {
    const date = new Date(d)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }

  sortByDates (arr) {
    const newArr = [...arr]
    return newArr.sort((a, b) => {
      return new Date(a) > new Date(b) ? 1 : -1
    })
  }

  getHhMm (d) {
    const date = new Date(d)
    return date.getHours().toString().padStart(2, '0') +
        ':' +
        date.getMinutes().toString().padStart(2, '0')
  }
}

export default new DateMapper()
