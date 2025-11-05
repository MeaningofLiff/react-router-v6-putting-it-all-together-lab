// src/pages/Directors.jsx
import { Link, useOutletContext } from "react-router-dom";

export default function Directors() {
  const { directors } = useOutletContext();

  return (
    <div>
      <h1>Directors</h1>
      <ul>
        {directors.map((d) => (
          <li key={d.id}>
            <Link to={`/directors/${d.id}`}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
 