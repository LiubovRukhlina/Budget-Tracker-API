export const verifyToken = (req, reply, done) => {
  const { token } = req.headers;

  jwt.verify(token, "my_jwt_secret", (err, decoded) => {
    if (err) {
      done(new Error("Unauthorized"));
    }

    req.user = {
      id: decoded.id,
    };
  });

  done();
};
