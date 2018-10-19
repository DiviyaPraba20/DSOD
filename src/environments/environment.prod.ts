export const environment = {
  production: true,
  api: 'https://devupapi1.dsodentist.com',
  LinkedIn: {
    authUrl: 'https://www.linkedin.com/oauth/v2/authorization',
    response_type: 'code',
    client_id: '81nb85ffrekjgr',
    redirect_uri: 'https://devangular1.dsodentist.com/dsodt/auth/linkedin',
    state: '987654321'
  },
  localStorage: {
    prefix: 'dsod-app',
    accessToken: 'access-token'
  }
};
