import { useEffect, useState } from "react";
import { getFavourites } from "../services/api";
import ProductCard from "../components/ProductCard";

const Favourites = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFavouriteUpdate = (id, value) => {
    // if product was unfavourited, remove from list
    if (value === false) {
      setProducts((prev) => prev.filter((p) => p._id !== id));
      return;
    }

    // otherwise ensure it's marked favourite
    setProducts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, isFavourite: true } : p)),
    );
  };

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const res = await getFavourites();

        // force isFavourite = true
        const favProducts = res.data.map((p) => ({
          ...p,
          isFavourite: true,
        }));

        setProducts(favProducts);
      } catch (err) {
        console.error("Failed to load favourites");
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, []);

  if (loading) {
    return <p className="text-muted">Loading favourites...</p>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-muted">
        <h2 className="text-xl font-semibold mb-2">No favourites yet ❤️</h2>
        <p>Start adding products to your favourites.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Your Favourites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onUpdate={handleFavouriteUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
