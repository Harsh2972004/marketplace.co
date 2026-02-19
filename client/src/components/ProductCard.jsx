import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { addToFavourites, removeFromFavourites } from "../services/api";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";

const ProductCard = ({ product, onUpdate }) => {
  const { isAuthenticated } = useAuth();
  const [favLoading, setFavLoading] = useState(false);

  const handleToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated || favLoading) return;

    setFavLoading(true);
    try {
      if (product.isFavourite) {
        await removeFromFavourites(product._id);
        onUpdate?.(product._id, false);
      } else {
        await addToFavourites(product._id);
        onUpdate?.(product._id, true);
      }
    } catch (err) {
      console.error("Failed to toggle favourite:", err);
    } finally {
      setFavLoading(false);
    }
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div
        className="
          group
          bg-card border border-border rounded-lg overflow-hidden
          shadow-sm hover:shadow-xl
          transition-all duration-200
          hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="relative w-full aspect-square bg-bg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
          />

          {/* Favourite Button */}
          <button
            type="button"
            onClick={handleToggle}
            disabled={favLoading}
            className="
              absolute top-2 right-2
              bg-white/90 backdrop-blur
              rounded-full
              p-2
              shadow
              transition-transform duration-150
              hover:scale-110
              active:scale-95
              disabled:opacity-60
            "
          >
            {product.isFavourite ? (
              <HiHeart className="w-5 h-5 text-red-500" />
            ) : (
              <HiOutlineHeart className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex flex-col gap-1.5">
          <h2 className="font-medium text-sm sm:text-base line-clamp-1">
            {product.name}
          </h2>

          <p className="font-semibold text-base sm:text-lg">₹{product.price}</p>

          <p className="text-xs sm:text-sm text-muted line-clamp-1">
            {product.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
