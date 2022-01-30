import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import loadable from "@loadable/component";
import useAxios from "@utils/useAxios";
import { masterMovies } from "@constants";
import MovieContext from '@contexts/MovieContext';
import SearchInput from "@components/SearchInput";

import { FlexColumn } from "@components/Grid";

const MovieList = loadable(() => import(/* webpackChunkName: "movie-list" */ '@components/MovieList'));

const HomeComponent = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
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

  const handleSubmit = () => {
    navigate(`/movies?search=${search}`);
  };

  return (
    <>
      <FlexColumn padding="0 16px">
        <SearchInput
          placeholder="Type movie title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onSubmit={handleSubmit}
          onClear={() => setSearch('')}
          margin="0"
        />
      </FlexColumn>
      <MovieList movies={supermanMovies} loading={supermanLoading} title={masterMovies[0].title} subtitle={masterMovies[0].subtitle} onClickAll={() => handleClickAll(masterMovies[0])} onClickDetail={handleClickDetail} />
      <MovieList movies={batmanMovies} loading={batmanLoading} title={masterMovies[1].title} subtitle={masterMovies[1].subtitle} onClickAll={() => handleClickAll(masterMovies[1])} onClickDetail={handleClickDetail} />
    </>
  );
};

export default HomeComponent;