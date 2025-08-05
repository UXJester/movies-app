import type { Movie } from '../types';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL =
  process.env.REACT_APP_TMDB_BASE_URL || 'https://api.themoviedb.org/3';

if (!API_KEY) {
  throw new Error(
    'REACT_APP_TMDB_API_KEY is not defined in environment variables'
  );
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};
