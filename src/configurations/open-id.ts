export const clientConfig = {
  response_type: 'code',
  client_id: 'bf5247f2-8edc-47a2-8ded-5cd7789f3c1a',
  authority: 'https://icarorg.b2clogin.com/icarorg.onmicrosoft.com/b2c_1_icar/v2.0/.well-known/openid-configuration',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  scope: 'https://icarorg.onmicrosoft.com/8bb8359a-7a4c-4436-8a49-ccb215a87581/all',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback'
}
