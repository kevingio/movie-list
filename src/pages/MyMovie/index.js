import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import MovieCard from "@components/MovieCard";
import { FlexLayout, FlexColumn } from "@components/Grid";
import Typography from "@components/Typography";
import { LC_MOVIE_KEY } from '@constants';

const Movie = () => {
  const navigate = useNavigate();
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem(LC_MOVIE_KEY, JSON.stringify(myList));
  }, [myList])

  const fetchDataFromLocalStorage = () => {
    const movieData = localStorage.getItem(LC_MOVIE_KEY);
    const movieList = movieData ? JSON.parse(movieData) : [];
    setMyList(movieList);
  };

  const handleClickDetail = ({ id }) => () => {
    navigate(`/movies/${id}`);
  };

  const removeFromList = ({ Title: title, imdbID: movieID }) => {
    const newData = myList;
    const matchIndex = myList.findIndex(item => item.imdbID === movieID);
    newData.splice(matchIndex, 1);
    setMyList([
      ...newData
    ]);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `${title} removed from your list`,
      timer: 2000,
      showCancelButton: false,
      showConfirmButton: false
    });
  };

  return (
    <>
      <FlexLayout padding="16px" margin="32px 0 0 0" direction="column">
        <Typography tag="display">
          My List
        </Typography>
        <Typography>
          List of movie that you selected
        </Typography>
      </FlexLayout>
      <FlexLayout wrap="wrap" padding="0 16px 0 0">
        {myList.length ? myList.map(item => (
          <FlexColumn width="50%" key={item.imdbID} margin="0 0 16px 0">
            <MovieCard
              title={item.Title}
              year={item.Year}
              poster={item.Poster}
              type={item.Type}
              onClick={handleClickDetail({ id: item.imdbID })}
              onActionClick={() => removeFromList(item)}
            />
          </FlexColumn>
        )) : <Typography margin="0 16px">No movie in your list</Typography>}
      </FlexLayout>
    </>
  )
};

export default Movie;