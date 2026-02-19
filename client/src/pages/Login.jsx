import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API, loginUser } from "../services/api";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const res = await loginUser(form);
      login(res.data.token);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.errors ||
          err.response?.data?.message ||
          "Login failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div
        className="
    w-full
    max-w-sm
    sm:max-w-md
    bg-card
    border border-border
    rounded-lg
    p-5 sm:p-6
    shadow-xl
  "
      >
        <h1 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center">
          Login
        </h1>

        {error && typeof error === "string" && (
          <p className="text-danger text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-md
                       focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error?.email && (
              <p className="text-danger text-sm px-1">{error.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-md
                       focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error?.password && (
              <p className="text-danger text-sm px-1">{error.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2.5 sm:py-2 rounded-md
                       hover:bg-primary-hover transition-colors duration-100 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-muted">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
