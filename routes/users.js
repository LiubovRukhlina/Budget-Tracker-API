import {
  getUsersHandler,
  registerUserHandler,
} from "../controllers/handlers/users.js";
import {
  getUsersSchema,
  registerUserSchema,
} from "../controllers/schemas/users.js";

const getUsersOpts = {
  schema: getUsersSchema,
  handler: getUsersHandler,
};

const registerUserOpts = {
  schema: registerUserSchema,
  handler: registerUserHandler,
};

export const userRoutes = (fastify, options, done) => {
  fastify.get("/api/users", getUsersOpts);
  fastify.post("/api/users/new", registerUserOpts);
  done();
};
