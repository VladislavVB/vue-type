import authApi from '../api/auth'
import authType from '../types/auth/Auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('storeAuth', {
  state: () => {
    return {
      isLoading: false,
      isSubmitng: false,
      curruntUser: null,
      validationErrors: null,
      isLoggedIn: null,
    }
  },
  getters: {
    currentUser: (state) => {
      return state.curruntUser
    },
    isLoggedIn: (state) => {
      return state.isLoggedIn
    },
  },
  actions: {
    register(sendData: authType) {
      return new Promise((resolve) => {
        this.isLoading = true
        authApi
          .register(sendData)
          .then((response) => {
            this.validationErrors = null
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
            this.validationErrors = errors.response.data.errors
            console.log(this.validationErrors)
          })
      })
    },
    login(sendData: authType) {
      return new Promise((resolve) => {
        console.log(resolve);
        
        this.isLoading = true
        authApi
          .login(sendData)
          .then((response) => {
            this.validationErrors = null
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
            this.validationErrors = errors.response.data.errors
            console.log(this.validationErrors)
          })
      })
    }
    // addTask(task) {
    //   this.tasks.unshift(task)
    // },
  },
})
