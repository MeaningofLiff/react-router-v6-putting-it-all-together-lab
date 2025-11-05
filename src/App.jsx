// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Directors from "./pages/Directors";
import DirectorIndex from "./pages/DirectorIndex";
import DirectorShow from "./pages/DirectorShow";
import DirectorForm from "./pages/DirectorForm";
import MovieForm from "./pages/MovieForm";
import MovieShow from "./pages/MovieShow";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="directors" element={<Directors />}>
          <Route index element={<DirectorIndex />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorShow />} />
          <Route path=":id/movies">
            <Route path="new" element={<MovieForm />} />
            <Route path=":movieId" element={<MovieShow />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
 