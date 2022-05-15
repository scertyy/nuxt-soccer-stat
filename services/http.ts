import axios from 'axios'
import { API_BASE_URL } from '~/types/base'
import { paramsSerializer } from '~/helpers/paramsSerializer'
import { ParametersType } from '~/types/parameters'

class Http {
    _axios
    _apiKey
    _networkErrCallback

    constructor () {
      this._axios = axios.create({
        baseURL: API_BASE_URL,
      })

      this._axios.interceptors.request.use((config) => {
        if (this._apiKey) {
          config.headers['X-Auth-Token'] = this._apiKey
        }
        return config
      }, error => Promise.reject(error))

      this._axios.interceptors.response.use(response => response,
        (error) => {
          if (error.code === 'ERR_NETWORK') {
            this._networkErrCallback()
          }
          return Promise.reject(error)
        })
    }

    initAxiosInstance (apiKey, networkErrCallback) {
      this._apiKey = apiKey
      this._networkErrCallback = networkErrCallback
    }

    get (endpoint, params: ParametersType = null) {
      const axiosSettings = {
        method: 'get',
        url: endpoint,
      }
      if (params) {
        axiosSettings.params = params
        axiosSettings.paramsSerializer = paramsSerializer
      }
      return this._axios(axiosSettings)
    }
}

export default new Http()
