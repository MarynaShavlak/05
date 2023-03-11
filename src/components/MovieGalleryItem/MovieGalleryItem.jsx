
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Movie, MovieTitle} from "./MovieGalleryItem.styled"


export const MovieGalleryItem =({movie}) => {
  const { poster_path, title } = movie;

  return (
    <>{poster_path && (
          <Movie
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`Movie ${title} poster`}
      />)}
      <MovieTitle>{title} </MovieTitle>
      
        
    </>
      
       
    )

}
  //  MovieGalleryItem.propTypes = {
  //   image: PropTypes.shape({
  //     webformatURL: PropTypes.string.isRequired,
  //     largeImageURL: PropTypes.string.isRequired,
  //     tags: PropTypes.string.isRequired,
  //   }).isRequired,
  // };