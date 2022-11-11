<script setup lang="ts">
const props = defineProps({
  job: {
    required: true,
    type: Object,
  },
})
</script>
<template>
  <div class="job-item">
    <h2>{{props.job.title}}</h2>
    <ul>
      <li>{{props.job.location}}</li>
      <li>{{props.job.salary}}</li>
      <li>{{props.job.id}}</li>
    </ul>
  </div>
</template>
<style>
.job-item {
  text-align: left;
  margin-bottom: 20px;
}
</style>