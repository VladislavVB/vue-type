<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './components/Ui/Navbar.vue'
import { useAuthStore } from './store/auth'

const authStore = useAuthStore()
onMounted(() => {
  authStore.getCurrentUser()
})
</script>

<template>
  <div class="container mx-auto px-4">
    <Navbar />

    <router-view></router-view>
  </div>
</template>
