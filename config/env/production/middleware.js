module.exports = {
  timeout: 100,
  load: {
    before: ["cors", "logger", "responseTime", "responses", "gzip"],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ["parser", "router"],
  },
  settings: {
    cors: { enabled: true, headers: '*', origin: '*' }
  },
};
