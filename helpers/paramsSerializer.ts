import { ParametersType } from '~/types/parameters'

export function paramsSerializer (params: ParametersType): string {
  let tmp = []
  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      const newArray = value.map(i => `${key}=${i}`)
      tmp = [...tmp, ...newArray]
    } else {
      tmp.push(`${key}=${value}`)
    }
  }
  return tmp.join('&')
}
