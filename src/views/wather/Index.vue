<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <div class="container text-white">
      <div class="pt-4 mb-8 relative">
        <input
          v-model="searchQuery"
          type="text"
          @input="getSearchCityResult"
          placeholder="Поиск города"
          class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />

        <ul
          v-if="!!weatherStore.getSearchResult.length"
          class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        >
          <li
            v-for="searchItem in weatherStore.getSearchResult"
            :key="searchItem.id"
            @click.stop="pushCityPage(searchItem)"
            class="py-2"
          >
            {{ searchItem.place_name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useWeatherStore } from '../../store/weather'

// import IWeatherCity from '../../types/weather/IWeatherCity'

const router = useRouter()
const weatherStore = useWeatherStore()
const searchQuery = ref<string>('Краснодар')
const queryTimeout = ref<any>(null)
const visibleMenu = ref<boolean>(false)

const pushCityPage = (searchItem: any) => {
  const [city, region] = searchItem.place_name.split(',')
  console.log(city, region)
  router.push({
    name: 'WeatherCity',
    params: {
      region: region.replaceAll(' ', ''),
      city: city.replaceAll(' ', ''),
    },
    query: {
      lat: searchItem.geometry.coordinates[1],
      lng: searchItem.geometry.coordinates[0],
    },
  })
}

const getSearchCityResult = () => {
  visibleMenu.value = true
  queryTimeout.value = setTimeout(() => {
    if (searchQuery.value !== '') {
      weatherStore.getSearchCity(searchQuery.value)
    }
  }, 1300)
}
</script>

<style scoped></style>
