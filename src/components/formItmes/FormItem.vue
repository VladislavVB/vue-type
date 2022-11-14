<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { PropType } from 'vue'

const props = defineProps({
  errors: {
    type: Object as PropType<any>,
  },
  name: {
    type: String as PropType<any>,
  },
})

const errorsMessages = computed(() => {
  return props.errors && props.errors[props.name]
})
</script>
<template>
  <div class="input-group text-black">
    <div v-for="error in errorsMessages" :key="error" class="errors text-rose-600">{{ error }}</div>
    <slot></slot>
  </div>
</template>
