<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <div class="container text-white">
      <div class="pt-4 mb-8 relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск города"
          class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref<string>('')
</script>

<style scoped></style>
