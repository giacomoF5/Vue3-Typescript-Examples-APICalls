<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore()

const input_username: Ref<string> = ref('')
const input_password: Ref<string> = ref('')

const route = useRoute()
const router = useRouter()

const login = () => {

  if (input_username.value == store.user.username) {
    store.user.isAuthenticated = true
    const redirectPath = '/private'
    router.push(redirectPath)
  }

}

</script>

<template>
  <div>
    <h1>Login View</h1>
    <form name="login-form">
      <input type="text" name="input_username" id="input_username" placeholder="username" v-model="input_username">
      <input type="password" name="input_password" id="input_password" v-model="input_password">
      <button type="submit" v-on:click.prevent="login">Submit</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>