import { DefinePlugin } from 'webpack';

export const plugins = [
  new DefinePlugin({
    'process.env': {
      REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
      REACT_APP_AUTH_DOMAIN: JSON.stringify(process.env.REACT_APP_AUTH_DOMAIN),
      REACT_APP_DATABASE_URL: JSON.stringify(process.env.REACT_APP_DATABASE_URL),
      REACT_APP_PROJECT_ID: JSON.stringify(process.env.REACT_APP_PROJECT_ID),
      REACT_APP_STORAGE_BUCKET: JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
      REACT_APP_MESSAGING_ID: JSON.stringify(process.env.REACT_APP_MESSAGING_ID),
      REACT_APP_APP_ID: JSON.stringify(process.env.REACT_APP_APP_ID),
      REACT_APP_MEASUREMENT_ID: JSON.stringify(process.env.REACT_APP_MEASUREMENT_ID),
    },
  }),
];
