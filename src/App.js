import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from '@components/Navbar';
import Home from '@pages/Home';
import Movie from "@pages/Movie";
import MovieDetail from "@pages/MovieDetail";

import { MovieContextProvider } from '@contexts/MovieContext';

import { container, mobileContainer } from './styles';

function App() {
  return (
    <div className={container}>
      <div className={mobileContainer}>
        <Navbar />
        <MovieContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/movies/:movieID" element={<MovieDetail />} />
            </Routes>
          </Router>
        </MovieContextProvider>
      </div>
    </div>
  );
}

export default App;
