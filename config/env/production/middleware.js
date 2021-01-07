module.exports = {
  //...
  settings: {
    cors: {
      enabled: true, //<--
      origin: ['http://localhost', 'https://mysite.com', 'https://www.mysite.com'], // ['*'] to allow all origins
      headers: ['Content-Type', 'Authorization', 'X-Frame-Options', 'x-csrf-token'], // ['*'] to allow all headers
    },
  }
  //...
};

