import { User } from "../models/User.model.js";
import { Products } from "../models/Product.model.js";

export const addFavourite = async (req, res) => {
  try {
    const { productId } = req.params;

    // check product exist
    const product = await Products.findById(productId);

    if (!product)
      return res.status(404).json({ message: "product not found." });

    const user = await User.findById(req.user.id);

    // avoiding duplicate entries
    if (user.favourites.includes(productId))
      return res.status(400).json({ message: "already in favourites." });

    user.favourites.push(productId);
    await user.save();

    return res.status(200).json({ message: "Added to favourites." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const removeFavourite = async (req, res) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(req.user.id);

    user.favourites = user.favourites.filter(
      (id) => id.toString() !== productId,
    );

    await user.save();

    return res.status(200).json({ message: "Removed from favourites" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getFavourites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("favourites");
    // user.favourites is populated with product documents
    const formatted = user.favourites.map((p) => ({
      ...p.toObject(),
      isFavourite: true,
    }));

    return res.status(200).json(formatted);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
