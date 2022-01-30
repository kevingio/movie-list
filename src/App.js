import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import loadable from "@loadable/component";

import Navbar from '@components/Navbar';

import { MovieContextProvider } from '@contexts/MovieContext';

import { container, mobileContainer } from './styles';

const Home = loadable(() => import(/* webpackChunkName: "homepage" */ '@pages/Home'));
const Movie = loadable(() => import(/* webpackChunkName: "movie" */ '@pages/Movie'));
const MovieDetail = loadable(() => import(/* webpackChunkName: "movie-detail" */ '@pages/MovieDetail'));
const MyMovie = loadable(() => import(/* webpackChunkName: "my-movie" */ '@pages/MyMovie'));

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
