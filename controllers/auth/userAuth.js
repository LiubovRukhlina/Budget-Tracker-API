import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
export function verifyToken(req, reply, done) {
  const { token } = req.headers;

  jwt.verify(token, "secret_string", async (err, decoded) => {
    if (err || !decoded?.id) {
      done(new Error("Unauthorized"));
    }

    const userID = new ObjectId(decoded.id);
    const users = this.mongo.db.collection("Users");

    const checkedUser = await users.findOne({ _id: userID });
    console.log(checkedUser);
    if (!checkedUser) {
      done(new Error("Unauthorized"));
    }
    req.user = checkedUser;
    done();
  });
}
