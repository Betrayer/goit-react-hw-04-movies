import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "5d541b775537fe62598d0f7b97768427";

const params = {
  api_key: API_KEY,
  language: "ru-RU"
};

export default {
  async getTrending() {
    try {
      const data = await axios.get("trending/all/day", { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },
  async getMovieDetails(id) {
    try {
      const data = await axios.get(`movie/${id}`, { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },
  async getMovieCast(movieId) {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },
  async getMovieReviews(movieId) {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },
  async getMoviesSearchBar(query) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return data;
  },
};
