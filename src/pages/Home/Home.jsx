import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { MovieGallery } from 'components/MovieGallery';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await API.getTrendingMovies();
        setMovies(movies);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieGallery movies={movies}></MovieGallery>
      {/* <List>
      {movies.map(({id, title}) => (
        <li key={id}>
          <ListLink to={`movies/${id}`}>
            {renderIcons('movie',iconSize.sm)}
            {title}
          </ListLink>
        </li>
      ))}
    </List> */}
    </main>
    
  );
};

export default Home;