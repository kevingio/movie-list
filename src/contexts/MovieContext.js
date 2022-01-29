import React, { useState } from "react";
import { element } from 'prop-types';

import { masterMovies } from '@constants';

const MovieContext = React.createContext({
  presetMovie: {},
  setPresetMovie: () => {},
});

export const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState(masterMovies[0]);

  return (
    <MovieContext.Provider value={{
      presetMovie: movie,
      setPresetMovie: setMovie
    }}>
      {children}
    </MovieContext.Provider>
  );
};

MovieContext.propTypes = {
  children: element.isRequired
};

export default MovieContext;