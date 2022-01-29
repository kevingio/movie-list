import React from "react";
import { useNavigate } from "react-router-dom";

import useAxios from "@utils/useAxios";

import MovieList from "@components/MovieList";

const HomeComponent = () => {
  const navigate = useNavigate();
  const { data: batmanMovies, loading: batmanLoading } = useAxios('batman');
  const { data: supermanMovies, loading: supermanLoading } = useAxios('batman');

  const handleClickAll = (qs) => {
    navigate({
      pathname: "movies",
      search: `?search=${qs}`
    });
  }

  return (
    <>
      <MovieList movies={batmanMovies} title="Superman Movies" subtitle="DC marvel" onClickAll={() => handleClickAll('superman')} onClickDetail={() => { }} />
      <MovieList movies={supermanMovies} title="Batman Movies" subtitle="DC marvel" onClickAll={() => handleClickAll('batman')} onClickDetail={() => { }} />
    </>
  );
};

export default HomeComponent;