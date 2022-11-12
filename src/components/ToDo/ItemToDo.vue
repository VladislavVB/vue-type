<script setup lang="ts">
import { PropType } from 'vue'
import TaskStatus from '../../types/ToDo/TaskStatus'

import TaskInterface from '../../types/ToDo/Task'

const props = defineProps({
  task: {
    required: true,
    type: Object as PropType<TaskInterface>,
  },
})

const emits = defineEmits(['changeStatus', 'deliteTask'])

const changeStatus = (ststus: TaskStatus) => {
  emits('changeStatus', props.task, ststus)
}
const deliteTask = () => {
  emits('deliteTask', props.task)
} 
</script>
<template>
  <div class="card-task bg-neutral-800">
    <div class="header">
      <div class="status bg-neutral-700">{{ props.task.ststus }}</div>
      <div class="buttons">
        Изменть на
        <span @click.stop="changeStatus('Выполнено')" class="bg-green-700"
          >Выполнено</span
        >
        <span @click.stop="changeStatus('В процессе')" class="bg-amber-400"
          >В процесс</span
        >
        <span @click.stop="changeStatus('Отменена')" class="bg-red-400"
          >Отменить</span
        >
        <span @click.stop="deliteTask" class="bg-red-600">X</span>
      </div>
    </div>
    <div class="text">{{ props.task.title }}</div>
  </div>
</template>

<style>
.card-task {
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
}
.card-task .status {
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  width: fit-content;
}
.card-task .header {
  display: flex;
  justify-content: space-between;
}
.card-task .buttons span {
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
