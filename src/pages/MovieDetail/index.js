import React from "react";
import { useParams } from "react-router-dom";

import Typography from "@components/Typography";
import Button from "@components/Button";
import { FlexLayout } from "@components/Grid";

import useAxios from "@utils/useAxios";
import { movieImage } from './styles';

const MovieDetail = () => {
	const { movieID } = useParams();

	const { data: movie } = useAxios({
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
	console.log('final', movie);

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
				<Button width="200px" primary>Save</Button>
			</FlexLayout>
		</>
	)
};

export default MovieDetail;