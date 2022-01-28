import React from "react";

import { cardWrapper, movieTitle, movieSubtitle } from "./styles";

const MovieCard = () => {
  return (
    <div className={cardWrapper}>
      <h2 className={movieTitle}>
        Superman is Dead
      </h2>
      <p className={movieSubtitle}>
        2020
      </p>
    </div>
  );
};

export default MovieCard;