<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

import Job from './types/Job'

const jobs = ref<Job[]>([
  { title: 'farm', location: 'lon Kra2s', salary: 11111, id: '1' },
  { title: 'farm12', location: 'lon Kra13s', salary: 222, id: '12' },
  { title: 'farm3', location: 'lon Kra1s', salary: 1133111, id: '13' },
  { title: 'farm13', location: 'lon Kr3as', salary: 33, id: '14' },
  { title: 'farm4', location: 'lon Kra4s', salary: 11112221, id: '15' },
  { title: 'farm5', location: 'lon Kra65s', salary: 444, id: '16' },
])
</script>

<template>

  <div>
    <div v-for="job in jobs" :key="job.id">{{job}}</div>
  </div>

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
