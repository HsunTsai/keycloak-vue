import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth/realms/test',
  realm: 'test',
  clientId: 'app1'
})

export const initKeycloak = (onAuthenticatedCallback: () => void) => {
  keycloak
    .init({
      onLoad: 'login-required',
      checkLoginIframe: false, // 禁用 iframe 檢查
      redirectUri: 'http://localhost:5173' // 設置重定向 URL
    })
    .then((authenticated) => {
      if (authenticated) {
        onAuthenticatedCallback()
      } else {
        console.warn('Not authenticated!')
        keycloak.login()
      }
    })
    .catch((error) => {
      console.error('Keycloak initialization failed:', error)
    })
}

export const login = () => keycloak.login()
export const logout = () => keycloak.logout()
export const getToken = () => keycloak.token
export const isAuthenticated = () => keycloak.authenticated
