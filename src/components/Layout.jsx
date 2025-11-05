// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";

const linkBase = {
  marginRight: 12,
  padding: "6px 10px",
  borderRadius: 6,
  textDecoration: "none",
  fontWeight: 600,
};

export default function Layout() {
  return (
    <div>
      <nav
        role="navigation"
        style={{ padding: 12, borderBottom: "1px solid #ddd", marginBottom: 16 }}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          style={({ isActive }) =>
            isActive
              ? { ...linkBase, background: "#111", color: "#fff" }
              : { ...linkBase, background: "#f1f1f1", color: "#111" }
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/directors"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={({ isActive }) =>
            isActive
              ? { ...linkBase, background: "#111", color: "#fff" }
              : { ...linkBase, background: "#f1f1f1", color: "#111" }
          }
        >
          Directors
        </NavLink>

        <NavLink
          to="/directors/new"
          style={{ ...linkBase, background: "#f1f1f1", color: "#111" }}
        >
          Add Director
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={({ isActive }) =>
            isActive
              ? { ...linkBase, background: "#111", color: "#fff" }
              : { ...linkBase, background: "#f1f1f1", color: "#111" }
          }
        >
          About
        </NavLink>
      </nav>

      <div style={{ padding: 16 }}>
        <Outlet />
      </div>
    </div>
  );
}
 