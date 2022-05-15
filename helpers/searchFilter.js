export function searchFilter (searchString, list, property = 'name') {
  return list.filter((item) => {
    return item[property].toUpperCase().indexOf(searchString.toUpperCase()) + 1
  })
}
