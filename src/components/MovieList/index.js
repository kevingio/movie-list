import React from "react";
import { string, arrayOf, object, func } from 'prop-types';
import MovieCard from "../MovieCard";

import Typography from "../Typography";
import { FlexColumn, FlexLayout } from "../Grid";

const MovieList = ({
  title,
  subtitle,
  movies,
  onClickDetail,
  onClickAll
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
        >
        {movies.map(item => (
          <FlexColumn key={item.id}>
            <MovieCard title={item.title} year={item.year} poster={item.poster} onClick={() => onClickDetail(item)} width="180px" />
          </FlexColumn>
        ))}
        </FlexLayout>
    </FlexLayout>
  )
};

MovieList.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  movies: arrayOf(object).isRequired,
  onClickAll: func.isRequired,
  onClickDetail: func.isRequired
};

export default MovieList;