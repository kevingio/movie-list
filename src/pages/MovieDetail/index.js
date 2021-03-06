import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

import Typography from "@components/Typography";
import Button from "@components/Button";
import { FlexLayout } from "@components/Grid";
import Shimmer from "@components/Shimmer";

import useAxios from "@utils/useAxios"
import { LC_MOVIE_KEY } from "@constants";
import { movieImage } from './styles';

const Placeholder = () => {
	return (
		<>
			<Shimmer height="450px" />
			<FlexLayout direction="column" padding="16px">
				<Shimmer height="20px" margin="0 0 16px 0" />
				<Shimmer width="50%" height="20px" margin="0 0 16px 0" />
				<Shimmer width="70%" height="20px" margin="0 0 16px 0" />
				<Shimmer width="80%"height="20px" margin="0 0 16px 0" />
				<Shimmer width="50%"height="20px" margin="0 0 16px 0" />
				<Shimmer width="70%" height="20px" margin="0 0 16px 0" />
				<Shimmer width="80%"height="20px" margin="0 0 16px 0" />
				<Shimmer width="50%"height="20px" margin="0 0 16px 0" />
			</FlexLayout>
		</>
	)
}

const MovieDetail = () => {
	const { movieID } = useParams();
	const [myList, setMyList] = useState([]);
	const isInMyFav = Boolean(myList.find(item => item.imdbID === movieID));

	const { data: movie, loading } = useAxios({
		keyword: movieID,
		searchType: 'movie-id'
	});
	const { 
			Title: title,
			Year: year,
			Plot: plot, 
			Released: releasedDate, 
			Actors: actors, 
			Genre: genre, 
			Writer: writer, 
			Country: country,
			Runtime: runtime,
			Language: language,
			imdbRating,
			imdbVotes,
			Poster: poster
		} = movie;


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

	const removeFromList = () => {
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
	const saveToList = () => {
		setMyList([
			...myList,
			movie
		]);
		Swal.fire({
			icon: 'success',
			title: 'Success',
			text: `${title} added to your list`,
			timer: 2000,
			showCancelButton: false,
			showConfirmButton: false
		});
	};

	if (loading) return <Placeholder />

	return (
		<>
			<img className={movieImage} src={poster} alt={title} />
			<FlexLayout direction="column" padding="16px">
				<Typography tag="display">{title}</Typography>
				<Typography tag="h2">{genre} ({year})</Typography>
				<Typography>{plot}</Typography>
				<Typography>	
					<b>Writer</b> : {writer} 
				</Typography>
				<Typography>	
					<b>Cast</b> : {actors} 
				</Typography>
				<Typography>	
					<b>IMDB Rating</b> : {imdbRating} / {imdbVotes}
				</Typography>
				<Typography>	
					<b>Country</b> : {country} 
				</Typography>
				<Typography>	
					<b>Language</b> : {language} 
				</Typography>
				<Typography>	
					<b>Runtime</b> : {runtime} 
				</Typography>
				<Typography>	
					<b>Release Date</b> : {releasedDate} 
				</Typography>
				{isInMyFav ? (
					<Button block secondary onClick={removeFromList}>
						Remove from my list
					</Button>
				): (
					<Button block primary onClick={saveToList}>
						Save
					</Button>
				)}
			</FlexLayout>
		</>
	)
};

export default MovieDetail;