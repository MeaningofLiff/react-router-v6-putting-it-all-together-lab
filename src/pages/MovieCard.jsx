// src/pages/MovieCard.jsx
import { useParams, useOutletContext } from "react-router-dom";

export default function MovieCard() {
  const { directorId, movieId } = useParams();
  const { directors } = useOutletContext() || {};

  // Loading / error guards
  if (directors === null) return <p>Loading…</p>;
  if (!Array.isArray(directors)) return <h2>Director not found.</h2>;

  const director = directors.find((d) => String(d.id) === String(directorId));
  if (!director) return <h2>Director not found.</h2>;

  const movie = (director.movies || []).find((m) => String(m.id) === String(movieId));
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <article>
      <h1>{movie.title}</h1>
      {/* Make the entire "Duration: 148 minutes" a single text node to satisfy the test */}
      <p>
        <strong>{`Duration: ${movie.time} minutes`}</strong>
      </p>
      {movie.genres?.length ? <p>{movie.genres.join(", ")}</p> : null}
    </article>
  );
}
  
  