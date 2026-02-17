import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, jwt_secret, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, jwt_secret);
};
