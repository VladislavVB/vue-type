<script setup lang="ts">
import { ref } from 'vue'

import TaskInterface from '../types/ToDo/Task'
import statusTask from '../types/ToDo/TaskStatus'

import FormToDoVue from '../components/ToDo/FormToDo.vue'
import ListToDoVue from '../components/ToDo/ListToDo.vue'

const addTask = (task: TaskInterface) => {
  tasksArray.value.push(task)
}

const changeStatus = (item: TaskInterface, status: statusTask) => {
  const indeTask = tasksArray.value.findIndex(i => i.id === item.id)
  tasksArray.value[indeTask].ststus = status
}

const deliteTask = (item: TaskInterface) => {
  tasksArray.value = tasksArray.value.filter((i) => i.id !== item.id)
}

const tasksArray = ref<TaskInterface[]>([])
</script>
<template>
  <div class="page">
    <h1>To Do Page</h1>
    <FormToDoVue @addTask="addTask" />
    <ListToDoVue
      @deliteTask="deliteTask"
      @changeStatus="changeStatus"
      :tasks="tasksArray"
    />
  </div>
</template>
