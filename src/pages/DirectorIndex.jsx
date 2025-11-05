// src/pages/DirectorIndex.jsx
import { Link } from "react-router-dom";
import { directors } from "../data.js"; // from src/pages -> src/data.js 
export default function DirectorIndex() {
  return (
    <ul>
      {directors.map((d) => (
        <li key={d.id}>
          <Link to={`/directors/${d.id}`}>{d.name}</Link>
        </li>
      ))}
    </ul>
  );
}
 