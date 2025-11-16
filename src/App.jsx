// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";          // or "./layouts/Layout" if you renamed
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import Directors from "./pages/Directors";
import DirectorForm from "./pages/DirectorForm";
import DirectorCard from "./pages/DirectorCard";
import MovieForm from "./pages/MovieForm";
import MovieCard from "./pages/MovieCard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (

     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="directors" element={<DirectorContainer />}>
          <Route index element={<Directors />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":directorId" element={<DirectorCard />} />
          <Route path=":directorId/movies/new" element={<MovieForm />} />
          <Route path=":directorId/movies/:movieId" element={<MovieCard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

     </BrowserRouter> 
  );
}
 