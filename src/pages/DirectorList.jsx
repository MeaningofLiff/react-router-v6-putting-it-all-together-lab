import { useOutletContext, Link } from "react-router-dom";

export default function DirectorList() {
  const { directors } = useOutletContext();

  if (!directors?.length) {
    return <p>No directors yet.</p>;
  }

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
 