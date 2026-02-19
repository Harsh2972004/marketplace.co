import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const showSearch = location.pathname === "/";
  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState(params.get("search") || "");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const newParams = new URLSearchParams(location.search);

    if (value) {
      newParams.set("search", value);
      newParams.set("page", "1");
    } else {
      newParams.delete("search");
      newParams.set("page", "1");
    }

    navigate(`/?${newParams.toString()}`);
  };

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-(--w-8xl) mx-auto px-4 py-4">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-xl font-semibold text-text">
            MarketPlace.Co
          </Link>

          {/* Desktop Search */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
              className="
                hidden md:block
                flex-1 max-w-2xl
                px-3 py-2
                border-2 border-border
                rounded-md
                focus:outline-none
                focus:ring-2 focus:ring-primary
              "
            />
          )}

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated && (
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                  `text-lg ${
                    isActive ? "text-primary font-medium" : "text-muted"
                  }`
                }
              >
                Favourites
              </NavLink>
            )}

            {!isAuthenticated ? (
              <div className="flex items-center gap-3">
                <NavLink
                  to="/login"
                  className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover"
                >
                  Register
                </NavLink>
              </div>
            ) : (
              <button
                onClick={logout}
                className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
    md:hidden
    text-2xl
    transition-transform duration-150
    active:scale-95
  "
          >
            ☰
          </button>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            className="
              mt-4 md:hidden
              w-full
              px-3 py-2
              border-2 border-border
              rounded-md
              focus:outline-none
              focus:ring-2 focus:ring-primary
            "
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`
    md:hidden
    overflow-hidden
    transition-all duration-200 ease-out
    ${menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
  `}
        >
          <div className="flex flex-col gap-4 py-2">
            {isAuthenticated && (
              <NavLink
                to="/favourites"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-muted"
              >
                Favourites
              </NavLink>
            )}

            {!isAuthenticated ? (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="border border-primary text-primary px-4 py-2 rounded-md text-center"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-primary text-white px-4 py-2 rounded-md text-center"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="border border-primary text-primary px-4 py-2 rounded-md"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
