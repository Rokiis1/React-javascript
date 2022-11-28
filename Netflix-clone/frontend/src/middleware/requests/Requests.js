import { API_URL } from "../api/api";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const requests = {
  requestPopular: `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestTopRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  requestHorror: `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
