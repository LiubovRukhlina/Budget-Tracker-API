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
  const { email, password } = req.body;
  const users = this.mongo.db.collection("Users");

  try {
    //const user = users.find(({ email: _email }) => email === _email);
    const user = await users.findOne({ email }); // assumming we used mongodb

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
      "secret_string",
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
