export function usePagination () {
  const pagination = reactive({
    data: [],
    page: 0,
    pagesCount: 0,
    itemsForPage: 0,
    useFilters: false,

    initPagination (
      list: Array<any>,
      itemsForPage: number = 24,
      startPage: number = 1,
      useFilters: boolean = false,
    ): void {
      this.data = list
      this.itemsForPage = itemsForPage
      this.useFilters = useFilters

      this.pagesCount = Math.ceil(this.data.length / this.itemsForPage)

      this.setPage(startPage)
    },

    setPage (page: number = 1) {
      let pageToTransition = page

      if (this.page === pageToTransition) {
        return
      }

      if (pageToTransition > this.pagesCount) {
        pageToTransition = this.pagesCount
      }

      if (pageToTransition <= 0) {
        pageToTransition = 1
      }

      this.page = pageToTransition
    },

    get shownData () {
      return this.data.slice(
        this.getStartIndexByPage(this.page),
        this.getStartIndexByPage(this.page + 1),
      )
    },

    getStartIndexByPage (page: number) {
      return this.itemsForPage * (page - 1)
    },
  })

  return {
    pagination,
  }
}
