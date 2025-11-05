// src/pages/MovieList.jsx
import { Link, useOutletContext } from "react-router-dom";

export default function MovieList() {
  const { director } = useOutletContext() ?? {};
  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      {director.movies?.length ? (
        <ul>
          {director.movies.map((m) => (
            <li key={m.id}>
              {/* Relative is fine too: <Link to={`movies/${m.id}`}>{m.title}</Link> */}
              <Link to={`movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies yet.</p>
      )}

      {/* Keep this link here ONLY if it's not in DirectorShow */}
      <p><Link to={`movies/new`}>Add a movie</Link></p>
    </div>
  );
}
 