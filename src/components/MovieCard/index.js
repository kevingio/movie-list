import React from "react";
import { string, func } from 'prop-types';

import { CardWrapper, movieTitle, movieSubtitle, movieImage, chipMovieType } from "./styles";
import Button from "@components/Button";

const MovieCard = ({
  title,
  poster,
  type,
  year,
  onClick,
  onActionClick,
  width,
}) => {
  return (
    <CardWrapper width={width}>
      <span className={chipMovieType}>
        {type}
      </span>
      <div onClick={onClick}>
        <img src={poster} className={movieImage} alt={title} />
        <h2 className={movieTitle}>
          {title}
        </h2>
        <p className={movieSubtitle}>
          {year}
        </p>
      </div>
      {onActionClick ? <Button dense secondary block onClick={onActionClick}>Remove</Button> : null}
    </CardWrapper>
  );
};

MovieCard.propTypes = {
  title: string.isRequired,
  poster: string.isRequired,
  year: string.isRequired,
  type: string.isRequired,
  onClick: func.isRequired,
  onActionClick: func,
  width: string.isRequired
};

MovieCard.defaultProps = {
  width: '100%',
  onActionClick: null
};

export default MovieCard;