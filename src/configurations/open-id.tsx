interface clientSettings {
  client_id: string;
  secret: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  authority: string;
  silent_redirect_uri: string;
}

export const clientConfig: clientSettings = {
  client_id: 'web',
  secret: 'icar',
  redirect_uri: 'https://localhost:3000',
  response_type: 'code',
  scope: 'Api',
  authority: 'https://localhost:5002',
  silent_redirect_uri: 'https://localhost:3000'
}
