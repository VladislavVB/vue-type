<script setup lang="ts">
import { useAuthStore } from '../../store/auth'

const authStore = useAuthStore()
</script>

<template>
  <div class="navbar bg-neutral-800">
    <div class="container mx-auto px-4">
      <router-link :active-class="'text-lime-600'" to="/">Home</router-link>
      <router-link :active-class="'text-lime-600'" to="/about"
        >About</router-link
      >
      <router-link :active-class="'text-lime-600'" to="/jobs">Jobs</router-link>
      <router-link :active-class="'text-lime-600'" to="/todo">ToDo</router-link>
      <router-link :active-class="'text-lime-600'" :to="{ name: 'Register' }"
        >Register</router-link
      >
      <router-link :active-class="'text-lime-600'" :to="{ name: 'Login' }"
        >Login</router-link
      >
      {{authStore.getIsLoggedIn}}
    </div>
  </div>
</template>
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 10px;
  padding-bottom: 10px;
}
.navbar a {
  margin-right: 10px;
}
.navbar a:last-child {
  margin-right: 0;
}
</style>
