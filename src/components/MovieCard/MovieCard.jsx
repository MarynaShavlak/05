import React from 'react';
import PropTypes from 'prop-types';

import {
  MovieDetailsCard,
  MovieDetailsWrapper, 
  MoviePoster,
  MovieTitle,
  MovieDesc,
  MovieScore,
  MovieGenreList,
  MovieGenre,
} from './MovieCard.styled';

export const MovieCard = ({ movieDetails}) => {
  const { title, vote_average, release_date, poster_path, overview, genres } = movieDetails;
  const userScore = Math.round(vote_average * 10);
  const releaseYear = new Date(release_date).getFullYear();

  return (
        <MovieDetailsCard>
        {poster_path && (
          <MoviePoster 
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`Movie ${title} poster`}
          />
        )}
        <MovieDetailsWrapper>
          <MovieTitle style={{ }}>{title} ({releaseYear}) </MovieTitle>
          <MovieScore>User score: {userScore}%</MovieScore>
          <div>
            <MovieDesc>Overview</MovieDesc>
            <p >{overview}</p>
          </div>
         <div>
            <MovieDesc>Genres</MovieDesc>
            {genres?.length > 0 
            ? <MovieGenreList>
              {genres.map(({ id, name }) => (
                <li key={id}><MovieGenre>{name}</MovieGenre></li>
              ))}
              </MovieGenreList>
            :  <p>There are no details about movie genres</p>       
            }
        </div>
          
          
          
        </MovieDetailsWrapper>
      </MovieDetailsCard>
  )

}