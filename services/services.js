import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=a2dab4cc93995858b9d09560e69f1b0e';

//Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/popular?${API_KEY}`);
  return resp.data.results;
};

//Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/upcoming?${API_KEY}`);
  return resp.data.results;
};

//Get Popular Tv
export const getPopularTv = async () => {
  const resp = await axios.get(`${API_URL}/tv/popular?${API_KEY}`);
  return resp.data.results;
};

// Get Musical Movies
export const getMusicalMovies = async () => {
  const resp = await axios.get(
    `${API_URL}/discover/movie?${API_KEY}&&with_genres=10402`,
  );
  return resp.data.results;
};
// Get Fantasy Movies
export const getFantasyMovies = async () => {
  const resp = await axios.get(
    `${API_URL}/discover/movie?${API_KEY}&&with_genres=14`,
  );
  return resp.data.results;
};
