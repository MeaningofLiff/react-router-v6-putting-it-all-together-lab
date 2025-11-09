import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  padding: "6px 10px",
  borderRadius: 6,
  textDecoration: "none",
  fontWeight: 600,
  background: isActive ? "#111" : "#f1f1f1",
  color: isActive ? "#fff" : "#111",
});

export default function NavBar() {
  return (
    <nav role="navigation" aria-label="Main"
         style={{ padding: 12, borderBottom: "1px solid #ddd", marginBottom: 16 }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/directors" style={linkStyle}>Directors</NavLink>
      <NavLink to="/directors/new" style={linkStyle}>Add Director</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
    </nav>
  );
}
 