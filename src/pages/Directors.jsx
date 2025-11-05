import { Outlet, Link } from "react-router-dom";

export default function Directors() {
  return (
    <div>
      <h1>Directors</h1>

      {/* Optional: links that appear on all nested pages */}
      <p>
        <Link to="/directors">All Directors</Link>{" • "}
        <Link to="/directors/new">Add Director</Link>
      </p>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}
 