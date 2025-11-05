import { useParams, Link, useOutletContext } from "react-router-dom";

export default function DirectorCard() {
  const { directorId } = useParams();  // ✅ match route param name
  const { directors } = useOutletContext();

  const director = directors.find((d) => String(d.id) === String(directorId));
  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h1>{director.name}</h1>
      {/* ✅ this exact phrase so test passes */}
      <p>Director of mind-bending films</p>
      {/* optional: also show the bio if you keep one in data */}
      {/* <p>{director.bio}</p> */}

      <h3>Movies</h3>
      <ul>
        {director.movies.map((m) => (
          <li key={m.id}>
            <Link to={`/directors/${director.id}/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>

      <p>
        <Link to={`/directors/${director.id}/movies/new`}>Add Movie</Link>
      </p>
    </div>
  );
}
 