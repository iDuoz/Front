const env = 'development';
// const env = "production"

export default env === 'development'
  ? {
      SERVER_URL: 'http://localhost:5001/eun-cherry/us-central1/api',
    }
  : {};
