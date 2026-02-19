import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useAuth } from "../hooks/useAuth";
import { addToFavourites, removeFromFavourites } from "../services/api";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";

const ProductDetail = () => {
  const { isAuthenticated } = useAuth();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favLoading, setFavLoading] = useState(false);

  const handleFavouriteUpdate = (id, value) => {
    setProduct((prev) =>
      prev && prev._id === id ? { ...prev, isFavourite: value } : prev,
    );
  };

  const handleToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated || !product || favLoading) return;

    setFavLoading(true);
    try {
      if (product.isFavourite) {
        await removeFromFavourites(product._id);
        handleFavouriteUpdate(product._id, false);
      } else {
        await addToFavourites(product._id);
        handleFavouriteUpdate(product._id, true);
      }
    } catch (err) {
      console.error("Failed to toggle favourite:", err);
    } finally {
      setFavLoading(false);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductById(id);
        setProduct(res.data);
      } catch {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <p className="text-center py-10 text-muted">Loading product...</p>;
  if (error) return <p className="text-center py-10 text-danger">{error}</p>;

  return (
    <div className="max-w-(--w-8xl) mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card border border-border rounded-xl shadow-lg p-4 sm:p-6">
        {/* Image */}
        <div className="aspect-square bg-bg rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-5">
          {/* Title + Favourite */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold leading-tight">
              {product.name}
            </h1>

            <button
              type="button"
              onClick={handleToggle}
              disabled={favLoading}
              className="
                rounded-full p-2
                border border-border
                bg-white
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

          {/* Price */}
          <p className="text-2xl font-bold text-primary">₹{product.price}</p>

          {/* Fake stock info */}
          <p className="text-sm text-green-600">
            ✔ In stock · Free delivery available
          </p>

          {/* Description */}
          <p className="text-sm text-muted leading-relaxed">
            {product.description}
          </p>

          {/* Category */}
          <p className="text-sm">
            <span className="font-medium">Category:</span>{" "}
            <span className="text-muted">{product.category}</span>
          </p>

          {/* Fake quantity selector */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Quantity</span>
            <div className="flex items-center border border-border rounded-md">
              <button type="button" disabled className="px-3 py-1 text-muted">
                −
              </button>
              <span className="px-4 py-1 text-sm">1</span>
              <button type="button" disabled className="px-3 py-1 text-muted">
                +
              </button>
            </div>
          </div>

          {/* Fake CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              type="button"
              disabled
              className="
                flex-1
                border border-border
                bg-white
                text-muted
                px-6 py-2.5
                rounded-md
                cursor-not-allowed
              "
            >
              Add to cart
            </button>

            <button
              type="button"
              disabled
              className="
                flex-1
                bg-primary/80
                text-white
                px-6 py-2.5
                rounded-md
                cursor-not-allowed
              "
            >
              Buy now
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted mt-2">
            * Cart and checkout are not implemented in this demo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
