import { SearchBar } from 'components/SearchBar';
import { useState, useEffect } from 'react';
// import { useSearchParams, useLocation } from 'react-router-dom';
import * as API from 'services/api';

// import {
//   List,
//   ListLink,
//   Message,
// } from './Movies.styled';

// import { renderIcons } from 'utils/renderIcons';
// import { iconSize } from 'constants';




const Movies = () => {
  // const [searchedMovies, setSearchedMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const [searchParams, setSearchParams] = useSearchParams({});
  // console.log(searchParams);
  // const location = useLocation();


// useEffect(() => {
//     async function fetchMoviesByQuery(query) {
//       try {
//         setIsLoading(true);
//         const moviesByQuery = await API.getMoviesByQuery(query);
//         setSearchedMovies(moviesByQuery);
//         setError(false);
//       } catch {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchMoviesByQuery();
//   }, []);

//   if (!searchedMovies) {
//     return null;
//   }

  const submitSearchQuery = e => {
    console.log('submit query');
  }

  

  return (
    <main>
      <SearchBar onsubmit={submitSearchQuery}></SearchBar>
        {/* <List>
          {movies.map(movie => (
            <li key={movie.id}>
              <ListLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {renderIcons('film', iconSize.md)}
                {movie.title}
              </ListLink>
            </li>
          ))}
        </List> */}
    </main>
  );
};

export default Movies;