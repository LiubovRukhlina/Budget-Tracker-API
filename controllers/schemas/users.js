const typeString = { type: "string" };

export const getUsersSchema = {
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          username: typeString, // typeString will be created soon
          email: typeString,
        },
      },
    },
  },
};

export const registerUserSchema = {
  body: {
    type: "object",
    required: ["username", "email", "password"],
    properties: {
      username: typeString,
      email: typeString,
      password: typeString,
    },
  },
  response: {
    200: typeString,
  },
};

export const loginUserSchema = {
  body: {
    type: "object",
    required: ["username", "password"],
    properties: {
      username: typeString,
      password: typeString,
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        token: typeString,
      },
    },
  },
};
