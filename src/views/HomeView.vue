<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { login, logout } from '@/useAuthService'

export default {
  methods: {
    login() {
      login()
    },
    logout() {
      logout()
    }
  }
}
</script>
