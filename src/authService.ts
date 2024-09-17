import { UserManager, WebStorageStateStore } from 'oidc-client-ts'

const settings = {
  authority: 'http://localhost:8080/realms/test',
  client_id: 'app1',
  redirect_uri: window.location.origin + '/callback',
  post_logout_redirect_uri: window.location.origin,
  response_type: 'code',
  scope: 'openid profile email',
  userStore: new WebStorageStateStore({ store: window.localStorage })
}

const userManager = new UserManager(settings)

export const login = () => {
  userManager.signinRedirect()
}

export const logout = () => {
  userManager.signoutRedirect()
}

export const getUser = async () => {
  const user = await userManager.getUser()
  return user
}

export const completeLogin = async () => {
  const user = await userManager.signinRedirectCallback()
  return user
}
