<script setup lang="ts">
import { onMounted } from 'vue'
import AppLayot from './layouts/AppLayout.vue'
import { useAuthStore } from './store/auth'

const storeAuth = useAuthStore()

onMounted(() => {
  storeAuth.getCurrentUser()
})
</script>

<template>
  <main>
    <AppLayot />
  </main>
</template>
