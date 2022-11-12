<script setup lang="ts">
import { ref } from 'vue'

import TaskInterface from '../types/ToDo/Task'

import FormToDoVue from '../components/ToDo/FormToDo.vue'
import ListToDoVue from '../components/ToDo/ListToDo.vue'

const addTask = (task: TaskInterface) => {
  console.log(task)
  // tasksArray.push(task)
}

const tasksArray = ref<TaskInterface[]>([])
</script>
<template>
  <div class="page">
    <h1>To Do Page</h1>
    <FormToDoVue @addTask="addTask" />
    <ListToDoVue />
  </div>
</template>
