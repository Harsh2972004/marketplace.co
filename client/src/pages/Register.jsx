import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API, registerUser } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.errors || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm shadow-xl bg-card border border-border rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-md
                       focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error?.name && (
              <p className="text-danger text-sm px-1">{error.name}</p>
            )}
          </div>

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

          {error === "Registration failed" && (
            <p className="text-danger text-sm mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md
                       hover:bg-primary-hover transition-colors duration-100
                       disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
