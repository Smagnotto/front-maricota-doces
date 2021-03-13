export const environment = {
  production: false,
  baseUrl: $ENV.BASE_URL,
  urlViaCep: $ENV.BASE_URL_VIA_CEP,
  firebase: {
    apiKey: $ENV.FIREBASE_API_KEY,
    authDomain: $ENV.FIREBASE_AUTH_DOMAIN,
    projectId: $ENV.FIREBASE_PROJECT_ID,
  }
};
