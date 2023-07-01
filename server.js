const fastify = require("fastify");
const { sequelize } = require("./db");
const userRoutes = require("./routes/userRoutes");
const fastifyRedis = require("fastify-redis");
const redisRoutes = require("./routes/redisRoutes");

const app = fastify();

// Register Redis plugin
app.register(fastifyRedis, {
  host: "localhost", // Redis server host
  port: 6379, // Redis server port
});

// Register Redis routes
app.register(redisRoutes);

app.register(userRoutes);

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
