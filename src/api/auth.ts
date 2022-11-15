import axios from './axios.js'
import IAuthType from '../types/auth/Auth.js'

const register = (data: IAuthType) => {
  return axios.post('/users', { user: data })
}

const login = (data: IAuthType) => {
  return axios.post('/users/login', { user: data })
}

const getCurrentUser = () => {
  return axios.get('/user')
}

export default {
  getCurrentUser,
  register,
  login,
}
