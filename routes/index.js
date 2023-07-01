const fastify = require("fastify");
const userRoutes = require("./userRoutes");

const routes = async (app) => {
  // Register user routes
  app.register(userRoutes, { prefix: "/users" });
};

module.exports = routes;