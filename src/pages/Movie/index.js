import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import loadable from "@loadable/component";
import useAxios from "@utils/useAxios";
import MovieContext from "@contexts/MovieContext";

import Shimmer from "@components/Shimmer";
import SearchInput from "@components/SearchInput";
import { FlexLayout, FlexColumn } from "@components/Grid";
import Typography from "@components/Typography";
import Button from "@components/Button";

const MovieCard = loadable(() => import(/* webpackChunkName: "movie-card" */ '@components/MovieCard'));

const Placeholder = () => {
  const data = Array(3).fill(true);
  return data.map((_, index) => (
    <FlexColumn width="50%" key={`place-holder-${index}`} margin="0 0 16px 0">
      <Shimmer height="286px" margin="0 8px" borderRadius="6px" />
    </FlexColumn>
  ))
};

const Movie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { presetMovie } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const qsSearch = searchParams.get('search');
  const didMountRef = useRef();

  const { data, loading, pageInfo } = useAxios({
    keyword: qsSearch || presetMovie.slug,
    page
  });

  const handleClickDetail = ({ id }) => () => {
    navigate(`/movies/${id}`);
  };

  const handleSubmit = () => {
    searchParams.set('search', search);
    setPage(1);
    navigate({
      search: searchParams.toString()
    })
  };

  useEffect(() => {
    if (!qsSearch && !didMountRef.current) {
      didMountRef.current = true;
      searchParams.set('search', presetMovie.slug);
      navigate({
        search: searchParams.toString()
      });
    }
  }, [navigate, presetMovie.slug, searchParams, qsSearch]);

  return (
    <>
      <FlexLayout padding="16px" margin="32px 0 0 0" direction="column">
        <SearchInput
          placeholder="Type movie title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onSubmit={handleSubmit}
          onClear={() => setSearch('')}
        />
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

      <Typography margin="0 16px">
        Showing {pageInfo.min} - {pageInfo.max} of {pageInfo.total} results
      </Typography>

      <FlexLayout wrap="wrap" margin="16px 0 0 0">
        {!loading && !data.length && (
          <Typography margin="0 16px">No movies found with keyword "{qsSearch}"</Typography>
        )}
        {!loading ? data.map(item => (
          <FlexColumn width="50%" key={item.id} margin="0 0 16px 0">
            <MovieCard title={item.title} year={item.year} poster={item.poster} type={item.type} onClick={handleClickDetail(item)} />
          </FlexColumn>
        )) : <Placeholder />}
        {pageInfo.maxPage > 1 && (
          <FlexLayout width="100%" padding="0 16px 16px 16px">
            {page > 1 && (
              <FlexColumn width="100%" margin="0 16px 0 0">
                <Button outline block secondary loading={loading} onClick={() => setPage(prevPage => prevPage - 1)}>Prev</Button>
              </FlexColumn>
            )}
            {pageInfo.maxPage > page && (
              <FlexColumn width="100%">
                <Button outline block primary loading={loading} onClick={() => setPage(prevPage => prevPage + 1)}>Next</Button>
              </FlexColumn>
            )}
          </FlexLayout>
        )}
      </FlexLayout>
    </>
  )
};

export default Movie;