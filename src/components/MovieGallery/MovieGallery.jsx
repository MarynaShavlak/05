import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { MovieGalleryItem } from 'components/MovieGalleryItem';


import { GalleryItem, GalleryList } from './MovieGallery.styled';


export const MovieGallery = ({ movies }) => {
  return (
    <GalleryList>
      {movies.map(movie => (
        <GalleryItem key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <MovieGalleryItem movie={movie} />
          </Link>

          
        </GalleryItem>
      ))}
    </GalleryList>
  )
}

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  )
}