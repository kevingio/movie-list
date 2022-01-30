import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from '@components/Navbar';
import Home from '@pages/Home';
import Movie from "@pages/Movie";
import MovieDetail from "@pages/MovieDetail";
import MyMovie from "@pages/MyMovie";

import { MovieContextProvider } from '@contexts/MovieContext';

import { container, mobileContainer } from './styles';

function App() {
  return (
    <Router>
      <div className={container}>
        <div className={mobileContainer}>
          <Navbar />
          <MovieContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-movies" element={<MyMovie />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/movies/:movieID" element={<MovieDetail />} />
            </Routes>
          </MovieContextProvider>
        </div>
      </div>
    </Router >
  );
}

export default App;
