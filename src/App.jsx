import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Directors from "./pages/Directors.jsx";
import DirectorForm from "./pages/DirectorForm.jsx";
import DirectorCard from "./pages/DirectorCard.jsx";
import MovieForm from "./pages/MovieForm.jsx";
import MovieCard from "./pages/MovieCard.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="directors">
          <Route index element={<Directors />} />
          <Route path="new" element={<DirectorForm />} />

          <Route path=":directorId">
            <Route index element={<DirectorCard />} />
            <Route path="movies">
              <Route path="new" element={<MovieForm />} />
              <Route path=":movieId" element={<MovieCard />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
 