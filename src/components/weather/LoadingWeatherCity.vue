<template>
  <div class="flex flex-col flex-1 items-center bg-weather-primary">
    <!-- Banner -->
    <!-- <div
      class="text-white p-4 bg-weather-secondary w-full text-center"
    >
      <p>
        You are currently previewing this city, click the "+"
        icon to start tracking this city.
      </p>
    </div> -->
    <!-- Weather Overview -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
      <p class="text-sm mb-12">
        {{
          new Date(weatherStore.getWeather?.currentTime).toLocaleDateString(
            "en-us",
            {
              weekday: "short",
              day: "2-digit",
              month: "long",
            }
          )
        }}
        {{
          new Date(weatherStore.getWeather?.currentTime).toLocaleTimeString(
            "en-us",
            {
              timeStyle: "short",
            }
          )
        }}
      </p>
      <p  class="text-8xl mb-8">{{formatterHelp.conversionDegrees(weatherStore.getWeather?.current?.temp)}}</p>
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
        <div
          v-for="day in weatherStore.getWeather.daily"
          :key="day.dt"
          class="flex items-center"
        >
          <p class="flex-1">
            {{
              new Date(day.dt * 1000).toLocaleDateString(
                "ru-Ru",
                {
                  weekday: "long",
                }
              )
            }}
          </p>
          <img
            class="w-[50px] h-[50px] object-cover"
            :src="
              `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            "
            alt=""
          />
          <div class="flex gap-2 flex-1 justify-end bar__weather-minmax">
            <p>Макс: {{ Math.round(formatterHelp.conversionDegrees(day.temp.max)) }}</p>
            <p>Мин: {{ Math.round(formatterHelp.conversionDegrees(day.temp.min)) }}</p>
          </div>
        </div>
        {{}}
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
import formatter from '../../helpers/formatter';

const route = useRoute()
console.log(route.query.lat)

const formatterHelp = formatter

const weatherStore = useWeatherStore()
weatherStore.getWeatherCity({
  lat: route.query.lat,
  lng: route.query.lng,
})
console.log(formatterHelp);

console.log(weatherStore.getWeather);

</script>
<style lang="sss" scoped>
.bar__weather-minmax {
  p {
    min-width: 54px;
  }
}
</style>