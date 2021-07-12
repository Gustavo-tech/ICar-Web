export const clientConfig = {
  client_id: 'web',
  secret: 'icar',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'code',
  scope: 'openid profile',
  authority: 'https://localhost:5002',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true
}
