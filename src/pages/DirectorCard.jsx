import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

export default function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors?.find((d) => String(d.id) === String(id));
  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h2>{director.name}</h2>
      {director.bio && <p>{director.bio}</p>}

      <h3>Movies</h3>
      {director.movies?.length ? (
        <ul>
          {director.movies.map((m) => (
            <li key={m.id}>
              <Link to={`movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies yet.</p>
      )}

      <p>
        <Link to={`movies/new`}>Add a movie</Link>
      </p>

      {/* Pass this director down to MovieList/MovieForm/MovieCard */}
      <Outlet context={{ director }} />
    </div>
  );
}
 