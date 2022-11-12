<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { PropType } from 'vue'

import Job from '../../types/Jobs/Job'
import OrderTerm from '../../types/Jobs/OrderTearm'

import JobItemVue from './JobItem.vue'
const props = defineProps({
  jobs: {
    required: true,
    type: Array as PropType<Job[]>,
  },
  order: {
    required: true,
    type: String as PropType<OrderTerm>,
  },
})

const orderedJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.order] > b[props.order] ? 1 : -1
  })
})
</script>

<template>
  <p>Sort by {{ order }}</p>
  <div class="Job-list">
    <JobItemVue v-for="job in orderedJobs" :key="job.id" :job="job" />
  </div>
</template>
