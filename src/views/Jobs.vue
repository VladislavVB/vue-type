<script setup lang="ts">
import { ref } from 'vue'
import JobListVue from '../components/Jobs/JobList.vue'
import Job from '../types/Job'
import OrderTerm from '../types/OrderTearm'

const jobs = ref<Job[]>([
  { title: 'farm', location: 'lon Kra2s', salary: 11111, id: '1' },
  { title: 'farm5', location: 'lon Kra65s', salary: 444, id: '16' },
  { title: 'farm12', location: 'lon Kra13s', salary: 222, id: '12' },
  { title: 'farm3', location: 'lon Kra1s', salary: 1133111, id: '13' },
  { title: 'farm13', location: 'lon Kr3as', salary: 33, id: '14' },
  { title: 'farm4', location: 'lon Kra4s', salary: 11112221, id: '15' },
])

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
  order.value = term
}
</script>

<template>
  <div class="page">
    <button @click.stop="handleClick('title')">Order by title</button>
    <button @click.stop="handleClick('salary')">Order by salary</button>
    <button @click.stop="handleClick('location')">Order by location</button>
    <JobListVue :jobs="jobs" :order="order" />
  </div>
</template>
