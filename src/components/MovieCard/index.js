import React from "react";
import { string, func } from 'prop-types';

import { CardWrapper, movieTitle, movieSubtitle, movieImage } from "./styles";

const MovieCard = ({
  title,
  poster,
  year,
  onClick,
  width,
}) => {
  return (
    <CardWrapper width={width} onClick={onClick}>
      <img src={poster} className={movieImage} alt={title} />
      <h2 className={movieTitle}>
        {title}
      </h2>
      <p className={movieSubtitle}>
        {year}
      </p>
    </CardWrapper>
  );
};

MovieCard.propTypes = {
  title: string.isRequired,
  poster: string.isRequired,
  year: string.isRequired,
  onClick: func.isRequired,
  width: string.isRequired
};

MovieCard.defaultProps = {
  width: '100%'
};

export default MovieCard;