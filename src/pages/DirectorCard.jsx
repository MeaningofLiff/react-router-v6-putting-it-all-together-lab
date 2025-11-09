import { useParams, Link, useOutletContext } from "react-router-dom";

export default function DirectorCard() {
  const { directorId } = useParams();
  const { directors } = useOutletContext() || {};

  if (directors === null) return <p>Loading…</p>;
  if (!Array.isArray(directors)) return <h2>Director not found.</h2>;

  const director = directors.find((d) => String(d.id) === String(directorId));
  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h1>{director.name}</h1>
      {director.bio && <p>{director.bio}</p>}

      <h3>Movies</h3>
      <ul>
        {(director.movies || []).map((m) => (
          <li key={m.id}>
            <Link to={`/directors/${director.id}/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>

      <p>
        <Link to={`/directors/${director.id}/movies/new`}>Add New Movie</Link>
      </p>
    </div>
  );
}
  