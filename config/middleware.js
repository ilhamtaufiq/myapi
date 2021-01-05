module.exports = {
    //...
    settings: {
      cors: {
        enabled: true,
        headers: '*',
        origins: '*',
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],

      },
    },
  };
  