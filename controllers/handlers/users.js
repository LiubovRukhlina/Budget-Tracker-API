import { users } from "../../cloud/users.js";
import jwt from "jsonwebtoken";

export const getUsersHandler = (req, reply) => {
  reply.send(users);
};

export const registerUserHandler = (req, reply) => {
  const { username, email, password } = req.body;
  const id = users.length + 1;

  users.push({
    id,
    username,
    email,
    password,
  });

  reply.send("Account created successfully");
};

export const loginUserHandler = async (req, reply) => {
  const { username, password } = req.body;

  try {
    const user = users.find(
      ({ username: _username }) => username === _username
    ); // await Users.findOne({ username }); // assumming we used mongodb

    if (!user) {
      return reply.send("This user doesn't exist");
    }

    // check if password is correct
    if (password !== user.password) {
      return reply.send("Invalid credentials");
    }

    // sign a token
    jwt.sign(
      { id: user.id },
      "my_jwt_secret",
      { expiresIn: 3 * 86400 },
      (err, token) => {
        if (err) throw err;

        reply.send({ token });
      }
    );

    await reply;
  } catch (err) {
    console.log(err);
    reply.status(500).send("Server error");
  }
};