// src/layouts/Layout.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  const [directors, setDirectors] = useState(null); // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    // Tests mock any request that includes "/directors" — keep it exactly like this:
    fetch("/directors")
      .then((r) => {
        if (!r.ok) throw new Error("failed to load directors");
        return r.json();
      })
      .then((data) => setDirectors(Array.isArray(data) ? data : []))
      .catch((e) => setError(e));
  }, []);

  const ctx = { directors, setDirectors, error };

  return (
    <>
      <NavBar />
      {/* Provide context to all nested routes */}
      <Outlet context={ctx} />
    </>
  );
}
 