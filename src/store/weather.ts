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
        const res = await response.json()
        const localOffset = new Date().getTimezoneOffset() * 60000
        const utc = res.current.dt * 1000 + localOffset
        res.currentTime = utc + 1000 * res.timezone_offset

        res.hourly.forEach((hour: any) => {
          const utc = hour.dt * 1000 + localOffset;
          hour.currentTime =
            utc + 1000 * res.timezone_offset;
        });
        this.resultWeather = res
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
