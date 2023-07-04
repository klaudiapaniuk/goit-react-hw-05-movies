import React, { useState, useEffect, Fragment } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import dataAPI from '../utils/APImovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: e.target[0].value });
    form.reset();
  };

  useEffect(() => {
    if (query === '') return;
    (async () => {
      const moviesByQuery = await dataAPI.getMoviesByQuery(query);
      setMovies(moviesByQuery);
    })();
  }, [query]);

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder=""
          required
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Movies;
