// src/pages/DirectorShow.jsx
import { useParams, Link, Outlet } from "react-router-dom";
import { directors } from "../data"; // or "../data.js"

export default function DirectorShow() {
  const { id } = useParams();
  const director = directors.find((d) => d.id === id);

  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      <h3>Movies</h3>
      <ul>
        {director.movies.map((m) => (
          <li key={m.id}>
            <Link to={`/directors/${id}/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>

      <p>
        <Link to={`/directors/${id}/movies/new`}>Add a movie</Link>
      </p>

      {/* render nested routes (MovieForm/MovieShow) here */}
      <Outlet />
    </div>
  );
}
 