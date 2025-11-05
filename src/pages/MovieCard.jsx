import { useParams, useOutletContext } from "react-router-dom";

export default function MovieCard() {
  const { directorId, movieId } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find((d) => String(d.id) === String(directorId));
  if (!director) return <h2>Director not found.</h2>;

  const movie = director.movies.find((m) => String(m.id) === String(movieId));
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Year: {movie.year}</p>
      <p>Director: {director.name}</p>
      {/* ✅ exact strings the tests look for */}
      <p>Duration: {movie.duration} minutes</p>
      <p>{movie.genres.join(", ")}</p>
    </div>
  );
}
 