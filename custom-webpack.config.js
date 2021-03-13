const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        BASE_URL: JSON.stringify(process.env.BASE_URL),
        FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
        FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        BASE_URL_VIA_CEP: JSON.stringify(process.env.BASE_URL_VIA_CEP)
      }
    })
  ]
};
