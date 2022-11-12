<script setup lang="ts">
import Navbar from './components/Ui/Navbar.vue'
</script>

<template>
  <div class="container mx-auto px-4">
    <Navbar/>

    <router-view></router-view>
  </div>
</template>
