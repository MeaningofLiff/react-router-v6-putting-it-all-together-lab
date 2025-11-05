// src/pages/MovieShow.jsx
import { useParams } from "react-router-dom";
import { directors } from "../data";

export default function MovieShow() {
  const { id, movieId } = useParams();
  const director = directors.find((d) => d.id === id);

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  const movie = director.movies.find((m) => m.id === movieId);
  if (!movie) {
    return <h2>Movie not found.</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Duration: {movie.duration} minutes</p>
      <p>{movie.genres.join(", ")}</p>
    </div>
  );
}
 