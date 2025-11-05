import { NavLink, Outlet } from "react-router-dom";
import { directors as seed } from "../data";

const linkBase = {
  padding: "8px 12px",
  borderRadius: 6,
  textDecoration: "none",
  marginRight: 8,
  display: "inline-block",
  fontSize: 14,
};

export default function Layout() {
  // If you plan to add forms later, you can lift this to state:
  // const [directors, setDirectors] = useState(seed);
  const directors = seed;

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
        {/* 👇 expose data to all nested routes */}
        <Outlet context={{ directors }} />
      </div>
    </div>
  );
}
 
 