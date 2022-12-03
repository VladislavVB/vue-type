<template>
  <div class="flex flex-col flex-1 items-center bg-weather-primary">
    <!-- Banner -->
    <pre>{{weatherStore.getWeather}}</pre>
    <div
      class="text-white p-4 bg-weather-secondary w-full text-center"
    >
      <p>
        You are currently previewing this city, click the "+"
        icon to start tracking this city.
      </p>
    </div>
    <!-- Weather Overview -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
      
    </div>

    <hr class="border-white border-opacity-10 border w-full" />

    <!-- Hourly Weather -->
    <div class="max-w-screen-md w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4">Hourly Weather</h2>
        <div class="flex gap-10 overflow-x-scroll">
          
        </div>
      </div>
    </div>

    <hr class="border-white border-opacity-10 border w-full" />

    <!-- Weekly Weather -->
    <div class="max-w-screen-md w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4">7 Day Forecast</h2>
        
      </div>
    </div>

    <div
      class="flex items-center gap-2 py-12 text-white cursor-pointer duration-150 hover:text-red-500"
      @click=""
    >
      <i class="fa-solid fa-trash"></i>
      <p>Remove City</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useWeatherStore } from '../../store/weather'

const route = useRoute()
console.log(route.query.lat)

const weatherStore = useWeatherStore()
weatherStore.getWeatherCity({
  lat: route.query.lat,
  lng: route.query.lng,
})
</script>
