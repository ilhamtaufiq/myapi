module.exports = {
  //...
  settings: {
    cors: {
      enabled: true, //<--
      origin: ['*'], // ['*'] to allow all origins
      headers: ['Content-Type', 'Authorization', 'X-Frame-Options', 'x-csrf-token'], // ['*'] to allow all headers
    },
  }
  //...
};

