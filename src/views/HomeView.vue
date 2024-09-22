<!-- src/views/Home.vue -->
<template>
  <div class="homeView">
    <h1>Login Success !</h1>
    <div class="homeView__actions">
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
      <button @click="getUserInfo">GetUserInfo</button>
    </div>

    <pre class="homeView__data" v-if="loginData">
      {{ JSON.stringify({ refreshTokenExpiredTime, accessTokenExpiredTime }, null, 2) }}
    </pre>
    <pre class="homeView__data">
      {{ JSON.stringify(loginData, null, 2) }}
    </pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { jwtDecode } from 'jwt-decode'
import dayjs from 'dayjs'
import { login, logout, getUser } from '@/useAuthService'
import './homeView.scss'

const loginData = ref()
const refreshTokenExpiredTime = ref()
const accessTokenExpiredTime = ref()

const getUserInfo = () => {
  getUser().then((data) => {
    loginData.value = data
    console.info('access_token', jwtDecode(data.access_token))
    console.info('refresh_token', jwtDecode(data.refresh_token))
    refreshTokenExpiredTime.value = dayjs(jwtDecode(data.refresh_token).exp * 1000).format(
      'YYYY-MM-DD HH:mm:ss'
    )
    accessTokenExpiredTime.value = dayjs(data.expires_at * 1000).format('YYYY-MM-DD HH:mm:ss')
  })
}
</script>
