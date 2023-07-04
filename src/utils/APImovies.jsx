import axios from 'axios';

const API_KEY = '8c57aa16de6d4d7f2d4ddf4e537ebfb8';
const BASE_URL = 'https://api.themoviedb.org/3';

const getTrendingToday = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return await response.data.results;
  } catch (err) {
    console.log(err);
  }
};

const getMovieCast = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

const getMovieReviews = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?page=1`, {
      params: {
        api_key: API_KEY,
      },
    });
    return await response.data.results;
  } catch (err) {
    console.log(err);
  }
};

const getMovieById = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

const getMoviesByQuery = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?&page=1`, {
      params: {
        query: query,
        api_key: API_KEY,
      },
    });
    return await response.data.results;
  } catch (err) {
    console.log(err);
  }
};

const dataAPI = {
  getTrendingToday,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMoviesByQuery,
};
export default dataAPI;
