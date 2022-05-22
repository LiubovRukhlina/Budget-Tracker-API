import {
  getUsersHandler,
  loginUserHandler,
  registerUserHandler,
} from "../controllers/handlers/users.js";
import {
  getUsersSchema,
  getUserSchema,
  loginUserSchema,
  registerUserSchema,
  updateUserSchema,
} from "../controllers/schemas/users.js";

import {
  addUser,
  getUser,
  listUsers,
  loginUser,
  updateUser,
} from "../controllers/mongo_users.js";

const getUsersOpts = {
  schema: getUsersSchema,
  handler: listUsers,
};

const getUserOpts = {
  schema: getUserSchema,
  handler: getUser,
};

const registerUserOpts = {
  schema: registerUserSchema,
  handler: addUser,
};

const loginUsersOpts = {
  schema: loginUserSchema,
  handler: loginUser,
};

const updateUsersOpts = {
  schema: updateUserSchema,
  handler: updateUser,
};

export const userRoutes = (fastify, options, done) => {
  fastify.get("/api/users", getUsersOpts);
  fastify.get("/api/users/:id", getUserOpts);
  fastify.post("/api/users/new", registerUserOpts);
  fastify.post("/api/users/login", loginUsersOpts);
  fastify.put("/api/users/:id", updateUsersOpts);
  done();
};
