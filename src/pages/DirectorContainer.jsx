import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function DirectorContainer() {
  const [directors, setDirectors] = useState(null); // null => loading
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => {
        if (!r.ok) throw new Error("failed to load directors");
        return r.json();
      })
      .then(setDirectors)
      .catch(setError);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Directors</h1>
      {error ? (
        <p role="alert">Failed to load.</p>
      ) : directors === null ? (
        <p>Loading…</p>
      ) : (
        <Outlet context={{ directors, setDirectors }} />
      )}
    </div>
  );
}
 
/** Handy hook to consume context in children safely */
export function useDirectorsContext() {
  return useOutletContext();
}
 