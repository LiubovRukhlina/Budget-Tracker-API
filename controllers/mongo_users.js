import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

export async function listUsers(req, reply) {
  const users = this.mongo.db.collection("Users");
  const result = await users.find({}).toArray();
  console.log(result);
  reply.send(result);
}

export async function addUser(req, reply) {
  const users = this.mongo.db.collection("Users");

  const { username, email, password, budget } = req.body;
  const checkedUser = await users.findOne({ email });
  if (checkedUser) {
    return reply.code(400).send({ message: "User already registered" });
  }
  const data = { username, email, password, budget };
  const result = await users.insertOne(data);
  reply.code(201).send(result);
}

export async function getUser(req, reply) {
  const users = this.mongo.db.collection("Users");
  const result = await users.findOne({ _id: new ObjectId(req.params.id) });
  if (result) {
    return reply.send(result);
  }
  reply.code(500).send({ message: "User not found" });
}

export async function loginUser(req, reply) {
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
      { id: user._id },
      "secret_string",
      { expiresIn: 3 * 86400 },
      (err, token) => {
        if (err) throw err;

        reply.send({ ...user, token });
      }
    );

    await reply;
  } catch (err) {
    console.log(err);
    reply.status(500).send("Server error");
  }
}
export async function updateUser(req, reply) {
  const users = this.mongo.db.collection("Users");
  const { budget } = req.body;
  const data = {
    $set: {
      budget,
    },
  };
  const result = await users.updateOne({ _id: ObjectId(req.params.id) }, data, {
    upsert: true,
  });
  reply.send({
    message: `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
  });
}
