import React, { useState, useEffect, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import dataAPI from '../utils/APImovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrendingToday = async () => {
      try {
        const trendingMovies = await dataAPI.getTrendingToday();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendingToday();
  }, []);

  return (
    <Fragment>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Home;
