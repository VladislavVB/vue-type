<script setup lang="ts">
import { PropType } from 'vue'

import TaskInterface from '../../types/ToDo/Task'
import statusTask from '../../types/ToDo/TaskStatus'

import ItemToDoVue from './ItemToDo.vue'

const props = defineProps({
  tasks: {
    required: true,
    type: Array as PropType<TaskInterface[]>,
  },
})

const emits = defineEmits(['changeStatus', 'deliteTask'])

const changeStatus = (item: TaskInterface, status: statusTask) => {
  emits('changeStatus', item, status)
}
const deliteTask = (item: TaskInterface) => {
  emits('deliteTask', item)
}
</script>
<template>
  <div class="list-todo">
    <ItemToDoVue
      @change-status="changeStatus"
      @delite-task="deliteTask"
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<style>
.list-todo {
  padding-bottom: 10px;
}
</style>
