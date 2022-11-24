<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useAuthStore } from '../../store/auth'
import IAuthType from '../../types/auth/IAuthType'
import FormItemVue from '../../components/formItmes/FormItem.vue'

const authStore = useAuthStore()
const router = useRouter()

const loginDate = reactive<IAuthType>({
  email: '',
  password: '',
})

const submitForm = () => {
  authStore.login(loginDate)
}
</script>
<template>
  <div class="page login">
    <form @submit.prevent="submitForm" class="form">
      <FormItemVue
        :name="'email'"
        :errors="authStore.validationErrors"
        class="input-group"
      >
        <input v-model="loginDate.email" placeholder="Email" />
      </FormItemVue>
      <FormItemVue
        :name="'password'"
        :errors="authStore.validationErrors"
        class="input-group"
      >
        <input
          v-model="loginDate.password"
          placeholder="Password"
          type="text"
        />
      </FormItemVue>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
