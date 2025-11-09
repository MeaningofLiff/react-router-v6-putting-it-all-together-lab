import { Outlet, useOutletContext } from "react-router-dom";

/** Forwards Layout's outlet context to the /directors branch */
export default function DirectorContainer() {
  const ctx = useOutletContext(); // { directors, setDirectors }
  return <Outlet context={ctx} />;
}

export function useDirectorsContext() {
  return useOutletContext();
}
 