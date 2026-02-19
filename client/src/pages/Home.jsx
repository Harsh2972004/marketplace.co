import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const page = Number(searchParams.get("page")) || 1;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const handleFavouriteUpdate = (id, value) => {
    setProducts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, isFavourite: value } : p)),
    );
  };

  const getLimitByScreen = () => {
    const width = window.innerWidth;

    if (width < 640) return 6; // mobile
    if (width < 1024) return 9; // tablet
    return 8; // desktop
  };

  const [limit, setLimit] = useState(getLimitByScreen());

  useEffect(() => {
    const handleResize = () => {
      setLimit(getLimitByScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getProducts(search, page, limit);
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, page, limit]);

  const changePage = (newPage) => {
    setSearchParams({
      search,
      page: newPage.toString(),
    });
  };

  return (
    <div className="max-w-(--w-8xl) mx-auto px-4 sm:px-6 lg:px-0 py-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
        Products
      </h1>

      {loading && (
        <p className="text-center text-muted py-8">Loading products...</p>
      )}

      {error && <p className="text-danger">{error}</p>}

      {!loading && products.length === 0 && (
        <p className="text-center text-muted py-8">No products found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            onUpdate={handleFavouriteUpdate}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => changePage(page - 1)}
            className="
  w-full sm:w-auto
  px-4 py-2
  bg-primary text-white 
  rounded-md 
  disabled:opacity-50
  disabled:border
  disabled:border-border
  disabled:bg-white 
  disabled:text-black
"
          >
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => changePage(page + 1)}
            className="
  w-full sm:w-auto
  px-4 py-2
  bg-primary text-white 
  rounded-md 
  disabled:opacity-50
  disabled:border
  disabled:border-border
  disabled:bg-white 
  disabled:text-black
"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
