import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useAxios from "@utils/useAxios";

import MovieCard from "@components/MovieCard";
import SearchInput from "@components/SearchInput";
import { FlexLayout, FlexColumn } from "@components/Grid";
import Typography from "@components/Typography";

const Movie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const { data, loading, refetch } = useAxios(searchParams.get('search'), page);

  const handleClickDetail = ({ id }) => () => {
    navigate(`/movies/${id}`);
  };

  return (
    <>
      <FlexLayout padding="16px" margin="32px 0 0 0" direction="column">
        <SearchInput placeholder="Type movie title..." />
        <Typography tag="display">
          Batmann
        </Typography>
        <Typography>
          DC marvel
        </Typography>
      </FlexLayout>
      <FlexLayout wrap="wrap" padding="0 16px 0 0">
        {!loading ? data.map(item => (
          <FlexColumn width="50%" key={item.id} margin="0 0 16px 0">
            <MovieCard title={item.title} year={item.year} poster={item.poster} onClick={handleClickDetail(item)} />
          </FlexColumn>
        )) : <p>Loading</p>}
      </FlexLayout>
    </>
  )
};

export default Movie;