<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router'
import BaseModal from '../components/weather/modals/BaseModal.vue'
// import { useAuthStore } from '../store/auth'

// const authStore = useAuthStore()
// const router = useRouter()
// const logout = () => {
//   localStorage.removeItem('accessToken')
//   router.push('/')
// }
const modalVisibly = ref(false)

const modalOpen = () => {
  modalVisibly.value = true
}



</script>

<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav
      class="container flex  flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'Weather' }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-sun text-2xl"></i>
        </div>
      </RouterLink>
      <div class="flex gap-3 flex-1 justify-end">
        <i  @click.stop="modalOpen"
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
        ></i>
      </div>
        <BaseModal v-model:model-value="modalVisibly">
          <div class="text-black">
            <h1 class="mb-1 text-2xl">Руководство по использованию</h1>
            <p class="mb-4">Тыкай на кнопки!! XDD</p>
          </div>
        </BaseModal>
    </nav>
  </header>
  <slot />
</template>
