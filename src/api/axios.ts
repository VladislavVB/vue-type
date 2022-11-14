import axios from 'axios'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('accessToken')
  const authorizationToken = token ? `Token ${token}` : ''
  config.headers.Authorization = authorizationToken
  return config
})
export default axios
