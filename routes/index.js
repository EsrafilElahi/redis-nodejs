const fastify = require("fastify");
const userRoutes = require("./userRoutes");
const redisRoutes = require("./redisRoutes");

const routes = async (app) => {
  // Register user routes
  app.register(userRoutes, { prefix: "/users" });
  app.register(redisRoutes, { prefix: "/redis" });
};

module.exports = routes;