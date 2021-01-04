module.exports = {
    //
    graphql: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: tru,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
      },
    },
  };
  