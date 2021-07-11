interface clientSettings {
  client_id: string;
  secret: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  authority: string;
  silent_redirect_uri: string;
  load_user_info: boolean;
}

export const clientConfig = {
  client_id: 'web',
  secret: 'icar',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'code',
  scope: 'openid profile',
  authority: 'https://localhost:5002',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  // metadata: {
  //   authorization_endpoint: 'https://localhost:5002/connect/authorize',
  //   token_endpoint: 'https://localhost:5002/connect/token',
  //   jwks_uri: 'https://localhost:5002/.well-known/openid-configuration/jwks',
  //   userinfo_endpoint: 'https://localhost:5002/connect/userinfo',
  //   end_session_endpoint: 'https://localhost:5002/connect/endsession',
  // }
}
