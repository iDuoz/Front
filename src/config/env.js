const env = 'development';
// const env = "production"

export default env === 'development'
  ? {
      SERVER_URL: 'http://localhost:5000',
    }
  : {};
