import jwt from "jsonwebtoken";
export const verifyToken = (req, reply, done) => {
  const { token } = req.headers;

  jwt.verify(token, "secret_string", (err, decoded) => {
    if (err) {
      done(new Error("Unauthorized"));
    }

    req.user = {
      id: decoded.id,
    };
  });

  done();
};
