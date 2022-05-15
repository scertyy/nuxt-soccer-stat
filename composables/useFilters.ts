import { usePagination } from '~/composables/usePagination'
import { searchFilter } from '~/helpers/searchFilter'

type Filters = {
  page?: number,
  search: string,
}

export function useFilters () {
  const { pagination } = usePagination()

  const filters = reactive({
    state: {
      data: [],
      filters: {},
    },

    initData (data: Array<any>) {
      this.state.data = data
    },

    updateListByFilters (filters: Filters) {
      const page = +filters.page
        ? +filters.page
        : 1

      this.state.filters = { ...filters, page }
      pagination.initPagination(this.filteredData, 24, page)
    },

    updatePage (number: number) {
      pagination.setPage(number)
      this.state.filters.page = pagination.page
    },

    get filteredData () {
      let filteredList = this.state.data
      if (this.state.filters.search) {
        filteredList = searchFilter(this.state.filters.search, filteredList)
      }
      return filteredList
    },

    get list () {
      return pagination.shownData
    },

    get query () {
      const f = {}
      for (const [key, value] of Object.entries(this.state.filters)) {
        if (value) {
          f[key] = value
        }
      }
      return f
    },

  })

  return {
    filters,
    pagination,
  }
}
