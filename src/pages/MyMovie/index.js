import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import MovieCard from "@components/MovieCard";
import SearchInput from "@components/SearchInput";
import { FlexLayout, FlexColumn } from "@components/Grid";
import Typography from "@components/Typography";
import { LC_MOVIE_KEY } from '@constants';

const Movie = () => {
  const navigate = useNavigate();
  const movieData = localStorage.getItem(LC_MOVIE_KEY);
  const movieList = movieData ? JSON.parse(movieData) : [];

  const handleClickDetail = ({ id }) => () => {
    navigate(`/movies/${id}`);
  };

  return (
    <>
      <FlexLayout padding="16px" margin="32px 0 0 0" direction="column">
        {/* <SearchInput placeholder="Type movie title..." value={search} onChange={e => setSearch(e.target.value)} onSubmit={handleSubmit} /> */}
        <Typography tag="display">
          My List
        </Typography>
        <Typography>
          List of movie that you selected
        </Typography>
      </FlexLayout>
      <FlexLayout wrap="wrap" padding="0 16px 0 0">
        {movieList.map(item => (
          <FlexColumn width="50%" key={item.id} margin="0 0 16px 0">
            <MovieCard title={item.Title} year={item.Year} poster={item.Poster} onClick={handleClickDetail({ id: item.imdbID })} />
          </FlexColumn>
        ))}
      </FlexLayout>
    </>
  )
};

export default Movie;