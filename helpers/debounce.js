class Debounce {
  constructor () {
    this.time = new Date().getTime()
  }

  do (callback, mlseconds) {
    const newTime = new Date().getTime()
    this.time = newTime
    setTimeout(() => {
      if (newTime === this.time) {
        callback()
      }
    }, mlseconds)
  }
}

export default new Debounce()
