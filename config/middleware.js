module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:8080', 'https://abs-dpkpp.herokuapp.com'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Captcha-Response',
      ],
    },
  },
});
