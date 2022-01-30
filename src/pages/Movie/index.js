import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useAxios from "@utils/useAxios";
import MovieContext from "@contexts/MovieContext";

import MovieCard from "@components/MovieCard";
import SearchInput from "@components/SearchInput";
import { FlexLayout, FlexColumn } from "@components/Grid";
import Typography from "@components/Typography";

const Movie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { presetMovie } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const qsSearch = searchParams.get('search');

  const { data, loading } = useAxios({
    keyword: qsSearch || presetMovie.slug,
    page
  });

  const handleClickDetail = ({ id }) => () => {
    navigate(`/movies/${id}`);
  };

  const handleSubmit = () => {
    searchParams.set('search', search);
    navigate({
      search: searchParams.toString()
    })
  };

  useEffect(() => {
    if (!qsSearch) {
      searchParams.set('search', presetMovie.slug);
      navigate({
        search: searchParams.toString()
      })
    }
  }, [navigate, presetMovie.slug, searchParams, qsSearch]);

  return (
    <>
      <FlexLayout padding="16px" margin="32px 0 0 0" direction="column">
        <SearchInput placeholder="Type movie title..." value={search} onChange={e => setSearch(e.target.value)} onSubmit={handleSubmit} />
        {presetMovie.slug === qsSearch ? (
          <>
            <Typography tag="display">
              {presetMovie.title}
            </Typography>
            <Typography>
              {presetMovie.subtitle}
            </Typography>
          </>
        ) : null}
      </FlexLayout>
      <FlexLayout wrap="wrap" padding="0 16px 0 0">
        {!data.length && (
          <Typography margin="0 16px">No movies found with keyword "{qsSearch}"</Typography>
        )}
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