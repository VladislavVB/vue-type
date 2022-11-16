import authApi from '../api/auth'
import IAuthType from '../types/auth/IAuthType'
import IBooleanType from '../types/defaults/Boolean'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('storeAuth', {
  state: () => {
    return {
      isLoading: false,
      isSubmitng: false,
      curruntUser: null,
      validationErrors: null,
      isLoggedIn: null as IBooleanType | null,
    }
  },
  getters: {
    getIsLoggedIn: (state) => {
      return state.isLoggedIn
    },
  },
  actions: {
    register(sendData: IAuthType) {
      this.validationErrors = null
      this.isLoading = true
      return new Promise((resolve) => {
        authApi
          .register(sendData)
          .then((response) => {
            localStorage.setItem('accessToken', response.data.user.token)
            this.validationErrors = null
            this.curruntUser = response.data.user
            this.isLoggedIn = true
            this.isLoading = false
          })
          .catch((errors) => {
            this.validationErrors = errors.response.data.errors
            this.isLoggedIn = false
            this.isLoading = false
          })
      })
    },
    login(sendData: IAuthType) {
      this.validationErrors = null
      this.isLoading = true

      return new Promise((resolve) => {
        this.isLoading = true
        authApi
          .login(sendData)
          .then((response) => {
            localStorage.setItem('accessToken', response.data.user.token)
            this.validationErrors = null
            this.curruntUser = response.data.user
            this.isLoggedIn = true
            this.isLoading = false
          })
          .catch((errors) => {
            this.validationErrors = errors.response.data.errors
            this.isLoggedIn = false
            this.isLoading = false
          })
      })
    },
    getCurrentUser() {
      this.validationErrors = null
      this.isLoading = true

      return new Promise((resolve) => {
        authApi
          .getCurrentUser()
          .then((response) => {
            this.isLoggedIn = true
            this.curruntUser = response.data.user
          })
          .catch((errors) => {
            this.isLoggedIn = false
            this.isLoading = false
          })
      })
    },
  },
})
