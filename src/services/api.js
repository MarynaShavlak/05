import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '5e62b2453973c629f1496ace3a4b7719';

export async function getTrendingMovies() {
  const result = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return result.data.results;
}

export async function getMoviesByQuery(query) {
  const result = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return result.data.results;
}

export async function getMovieDetails(id) {
  const result = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return result.data;
}

export async function getMovieCast(id) {
  const result = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return result.data.cast;
}

export async function getMovieReviews(id) {
  const result = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return result.data.results;
}
