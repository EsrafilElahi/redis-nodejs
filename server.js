const fastify = require("fastify");
const { sequelize } = require("./db");
const allRoutes = require("./routes");
const fastifyRedis = require("fastify-redis");

const app = fastify();

// Register Redis plugin
app.register(fastifyRedis, {
  host: "localhost", // Redis server host
  port: 6379, // Redis server port
});

// register all routes
app.register(allRoutes);

async function startApp() {
  try {
    await sequelize.sync(); // Sync models with database

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startApp();
