import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import useAxios from "@utils/useAxios";
import { masterMovies } from "@constants";
import MovieContext from '@contexts/MovieContext';

import MovieList from "@components/MovieList";

const HomeComponent = () => {
  const navigate = useNavigate();
  const { setPresetMovie } = useContext(MovieContext);
  const { data: batmanMovies, loading: batmanLoading } = useAxios({ keyword: 'batman' });
  const { data: supermanMovies, loading: supermanLoading } = useAxios({ keyword: 'superman' });

  const handleClickAll = (item) => {
    setPresetMovie(item);
    navigate('movies');
  };

  const handleClickDetail = ({ id }) => {
    navigate(`movies/${id}`);
  };

  return (
    <>
      <MovieList movies={supermanMovies} loading={supermanLoading} title={masterMovies[0].title} subtitle={masterMovies[0].subtitle} onClickAll={() => handleClickAll(masterMovies[0])} onClickDetail={handleClickDetail} />
      <MovieList movies={batmanMovies} loading={batmanLoading} title={masterMovies[1].title} subtitle={masterMovies[1].subtitle} onClickAll={() => handleClickAll(masterMovies[1])} onClickDetail={handleClickDetail} />
    </>
  );
};

export default HomeComponent;