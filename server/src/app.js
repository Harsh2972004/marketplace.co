import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import productRouter from "./routes/products.routes.js";
import favouritesRouter from "./routes/favourites.routes.js";

const app = express();

app.use(cors({ origin: ["http://localhost:5173", process.env.CLIENT_URL] }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRouter);
app.use("/api/products", productRouter);
app.use("/api/favourites", favouritesRouter);

connectDB();

export default app;
