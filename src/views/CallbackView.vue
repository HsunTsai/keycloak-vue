<!-- src/views/Callback.vue -->
<template>
  <div>Loading...</div>
</template>

<script>
import { completeLogin } from '@/useAuthService'

export default {
  async mounted() {
    try {
      await completeLogin()
      this.$router.push('/')
    } catch (error) {
      console.error('Login failed', error)
    }
  }
}
</script>
