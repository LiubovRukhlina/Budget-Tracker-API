import Fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifySwagger from "fastify-swagger";
import fastifyMongodb from "@fastify/mongodb";

import expenseRoutes from "./routes/expenses.js";
import { userRoutes } from "./routes/users.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyCors, (instance) => (req, callback) => {
  let corsOptions = { origin: "*" };

  callback(null, corsOptions); // callback expects two parameters: error and options
});

fastify.register(expenseRoutes);
fastify.register(userRoutes);

fastify.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "budget-tracker-api" },
  },
});

fastify.register(fastifyMongodb, {
  forceClose: true,
  url: process.env.CONNECT_DB,
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
