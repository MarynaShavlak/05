import React from 'react';
import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { MovieGallery } from 'components/MovieGallery';
import { Pagination } from 'components/Pagination';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isGalleryShown, setIsGalleryShown] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies(page) {
      try {

        const data= await API.getTrendingMovies(page);
        const { results: movies, total_pages } = data;
        setTotalPages(total_pages);
        setMovies(movies);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsGalleryShown(true);
      }
    };
    fetchMovies(currentPage);
  }, [currentPage]);


  const onPageChange = e => {
    console.log(e);
    console.log(currentPage);
    setCurrentPage(e.selected+1)
  }

  return (
    <main>
      <MovieGallery movies={movies}></MovieGallery>
      {isGalleryShown && movies.length !== 0 && 
        <Pagination totalPages={totalPages} onPageChange={onPageChange}></Pagination>
      }
      
    </main>
    
  );
};

export default Home;