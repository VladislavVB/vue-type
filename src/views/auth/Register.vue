<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthStore } from '../../store/auth'
import IAuthType from '../../types/auth/IAuthType'
import FormItemVue from '../../components/formItmes/FormItem.vue'

const authStore = useAuthStore()

const registerData = reactive<IAuthType>({
  username: '',
  email: '',
  password: '',
})

const submitForm = () => {
  authStore
    .register(registerData)
}
</script>
<template>
  <div class="page register">
    <form @submit.prevent="submitForm" class="form ">
      <FormItemVue :name="'username'" :errors="authStore.validationErrors">
        <input
          v-model="registerData.username"
          placeholder="Username"
          type="text"
        />
      </FormItemVue>

      <FormItemVue :name="'email'" :errors="authStore.validationErrors">
        <input v-model="registerData.email" placeholder="Email" type="email" />
      </FormItemVue>

      <FormItemVue :name="'password'" :errors="authStore.validationErrors">
        <input
          v-model="registerData.password"
          placeholder="Password"
          type="text"
        />
      </FormItemVue>

      <button type="submit">Register</button>
    </form>
  </div>
</template>
