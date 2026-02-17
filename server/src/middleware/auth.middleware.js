import { verifyToken } from "../services/jwtService.js";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoced = verifyToken(token);
    req.user = decoced;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
