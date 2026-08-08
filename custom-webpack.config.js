const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        BASE_URL: JSON.stringify(process.env.BASE_URL),
        BACKEND_TYPE: JSON.stringify(process.env.BACKEND_TYPE),
        SUPABASE_URL: JSON.stringify(process.env.SUPABASE_URL),
        SUPABASE_ANON_KEY: JSON.stringify(process.env.SUPABASE_ANON_KEY),
        FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
        FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        BASE_URL_VIA_CEP: JSON.stringify(process.env.BASE_URL_VIA_CEP)
      }
    })
  ]
};
