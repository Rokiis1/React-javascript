import axios from "axios";
import { useState } from "react";
import requests from "../requests/Requests";

export const useGetPopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const getPopularMovie = async () => {
    try {
      const response = await axios.get(requests.requestPopular);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return [movies, getPopularMovie];
};

export default useGetPopularMovie;
