import {
  getUsersHandler,
  loginUserHandler,
  registerUserHandler,
} from "../controllers/handlers/users.js";
import {
  getUsersSchema,
  loginUserSchema,
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

const loginUsersOpts = {
  schema: loginUserSchema,
  handler: loginUserHandler,
};

export const userRoutes = (fastify, options, done) => {
  fastify.get("/api/users", getUsersOpts);
  fastify.post("/api/users/new", registerUserOpts);
  fastify.post("/api/users/login", loginUsersOpts);
  done();
};
