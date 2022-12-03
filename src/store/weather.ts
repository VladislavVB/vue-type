// https://api.openweathermap.org/data/2.5/weather?q=Krasnodar&appid=c22653e187556d1189e5da8412d50805&lang=ru
import weatherApi from '../api/weatherApi'
import searchCityApi from '../api/searchCityApi'
import { defineStore } from 'pinia'

import IWeatherCity from '../types/weather/IWeatherCity'

export const useWeatherStore = defineStore('storeWeather', {
  state: () => {
    return {
      isLoading: false,
      searchError: null as any,
      searchResult: [] as any,
      resultWeather: {} as any,
      errorsRequests: [],
    }
  },
  getters: {
    getSearchResult(): any {
      return this.searchResult
    },
    getWeather(): any {
      return this.resultWeather
    },
  },
  actions: {
    getWeatherCity(sendDate: any) {
      weatherApi.getWeather(sendDate).then(async (response: any) => {
        this.resultWeather = await response.json()
        console.log(this.resultWeather)
      })
    },
    getSearchCity(city: string) {
      if (city !== '') {
        try {
          searchCityApi.getCity(city).then(async (response: any) => {
            const res = await response.json()
            this.searchResult = res.features
          })
        } catch (error) {
          this.searchError = true
        }
      }
    },
  },
})
