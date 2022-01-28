import React from "react";

import MovieList from "../components/MovieList";

const mockData = [
  {
    id: 1,
    name: 'Superman is Dead',
    year: '2004',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    id: 2,
    name: 'Superman is Dead',
    year: '2004',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    id: 3,
    name: 'Superman is Dead',
    year: '2004',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
];

const HomeComponent = () => {
  return (
    <>
      <MovieList movies={mockData} title="Superman Movies" subtitle="DC marvel" onClickAll={() => { }} onClickDetail={() => { }} />
      <MovieList movies={mockData} title="Batman Movies" subtitle="DC marvel" onClickAll={() => { }} onClickDetail={() => { }} />
    </>
  );
};

export default HomeComponent;