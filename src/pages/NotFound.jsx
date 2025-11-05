// src/pages/NotFound.jsx
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const loc = useLocation();
  return (
    <div>
      <h2>404 – Page Not Found</h2>
      <p>
        We couldn’t find: <code>{loc.pathname}</code>
      </p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
 