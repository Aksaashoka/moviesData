import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=a2dab4cc93995858b9d09560e69f1b0e';

const getPopularMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/popular?${API_KEY}`);
  return resp.data.results;
};
