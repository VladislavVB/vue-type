<script setup lang="ts">
import { reactive } from 'vue'
import TaskInterface from '../../types/ToDo/Task'

const emits = defineEmits(['addTask'])

const task = reactive<TaskInterface>({
  id: Date.now(),
  title: '',
  ststus: 'В процессе',
})

const sendTask = () => {
  emits('addTask', task)
  task.id = Date.now()
  task.title = ''
}
// const emitAddTask = () => {
//   emits('addTask', )

// }

</script>
<template>
  <form class="form" @submit.prevent="sendTask">
    <div class="input-group rounded-sm bg-neutral-800">
      <label>Задача</label>
      <input class="bg-neutral-600" type="text" v-model="task.title" />
    </div>
    <button class="bg-neutral-800" type="submit">Добавить</button>
  </form>
</template>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px !important;
  margin-bottom: 10px;
}
.form button {
  border-radius: 10px;
  padding: 10px;
}
</style>
