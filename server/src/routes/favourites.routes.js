import { Router } from "express";
import {
  addFavourite,
  removeFavourite,
  getFavourites,
} from "../controllers/favourites.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = Router();

router.post("/:productId", auth, addFavourite);
router.delete("/:productId", auth, removeFavourite);
router.get("/", auth, getFavourites);

export default router;
