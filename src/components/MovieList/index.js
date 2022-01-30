import React from "react";
import { string, arrayOf, object, func, bool } from 'prop-types';
import Shimmer from "@components/Shimmer";
import MovieCard from "../MovieCard";

import Typography from "../Typography";
import { FlexColumn, FlexLayout } from "../Grid";

const Placeholder = () => {
  const data = Array(3).fill(true);
  return data.map((_, index) => (
    <FlexColumn key={`place-holder-${index}`}>
      <Shimmer width="180px" height="300px" margin="0 16px 0 0" borderRadius="6px" />
    </FlexColumn>
  ))
};

const MovieList = ({
  title,
  subtitle,
  movies,
  onClickDetail,
  onClickAll,
  loading
}) => {
  return (
    <FlexLayout padding="16px 0px" margin="0px 0px 16px 0px" direction="column" background="white">
      <FlexLayout direction="column" padding="0 16px">
        <FlexLayout width="100%" margin="0 0 4px 0">
          <FlexColumn width="calc(100% - 100px)" align="center">
            <Typography tag="h2" margin="0">{title}</Typography>
          </FlexColumn>
          <FlexColumn width="100px" align="center" justify="flex-end">
            <Typography caption link onClick={onClickAll} margin="0">
              See all
            </Typography>
          </FlexColumn>
        </FlexLayout>
        <FlexColumn width="calc(100% - 100px)">
          <Typography margin="0 0 16px 0">
            {subtitle}
          </Typography>
        </FlexColumn>
      </FlexLayout>
      <FlexLayout
        overflowX="auto"
        width="100%"
        maxWidth="500px"
        whiteSpace="nowrap"
        padding="8px 0px"
        >
        {!loading ? movies.map(item => (
          <FlexColumn key={item.id}>
            <MovieCard 
              title={item.title}
              year={item.year}
              poster={item.poster}
              type={item.type}
              onClick={() => onClickDetail(item)} width="180px"
            />
          </FlexColumn>
        )) : <Placeholder />}
        </FlexLayout>
    </FlexLayout>
  )
};

MovieList.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  movies: arrayOf(object).isRequired,
  onClickAll: func.isRequired,
  onClickDetail: func.isRequired,
  loading: bool.isRequired
};

export default MovieList;