import dayjs from 'dayjs'
import { UserManager, WebStorageStateStore } from 'oidc-client-ts'
import { onMounted } from 'vue'

export const oidcSettings = {
  authority: 'http://localhost:8080/realms/test',
  client_id: 'app1',
  redirect_uri: window.location.origin + '/callback',
  post_logout_redirect_uri: window.location.origin,
  response_type: 'code',
  scope: 'openid profile email',
  userStore: new WebStorageStateStore({ store: window.localStorage })
}

export const userManager = new UserManager(oidcSettings)

export default () => {
  onMounted(() => {
    userManager.getUser().then((user) => {
      if (user) {
        console.log('使用者已登入', user)
        console.log(
          'accrss_tokne 期限',
          dayjs((user.expires_at ?? 0) * 1000).format('YYYY-MM-DD HH:mm:ss')
        )
      } else {
        console.log('尚未登入，前往登入頁面')
        userManager.signinRedirect()
      }
    })
  })
}

export const login = () => {
  userManager.signinRedirect()
}

export const logout = async () => {
  const user = await userManager.getUser()
  console.info('user', user)
  if (user) {
    userManager.signoutRedirect({
      id_token_hint: user.id_token,
      post_logout_redirect_uri: window.location.origin
    })
  } else {
    console.error('No user found for logout')
  }
}

export const getUser = async () => {
  const user = await userManager.getUser()
  return user
}

export const completeLogin = async () => {
  const user = await userManager.signinRedirectCallback()
  return user
}
