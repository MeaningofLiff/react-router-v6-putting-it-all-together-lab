// src/pages/MovieCard.jsx
import { useParams, useOutletContext } from "react-router-dom";

export default function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext() ?? {};
  if (!director) return <h2>Director not found.</h2>;

  const movie = director.movies?.find((m) => m.id === movieId);
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <article>
      <h2>{movie.title}</h2>
      <p>Duration: {movie.time} minutes</p>
      <p>{movie.genres?.join(", ")}</p>
    </article>
  );
}
 