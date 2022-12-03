<template>
  <div>
    <Suspense>
      <LoadingWeatherCityVue />
      <template #fallback>
        
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import LoadingWeatherCityVue from '../../components/weather/LoadingWeatherCity.vue'
</script>

<style scoped></style>
