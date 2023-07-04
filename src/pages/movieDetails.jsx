import React, { useEffect, useState, useRef, Suspense, Fragment } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import dataAPI from '../utils/APImovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState([]);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        const movie = await dataAPI.getMovieById(movieId);
        setSelectedMovie([movie]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);

  return (
    <Fragment>
      <div>
        <Link to={goBack.current}>
          <button>Go back</button>
        </Link>
        {selectedMovie.map(
          ({
            poster_path,
            title,
            release_date,
            vote_average,
            overview,
            genres,
            id,
            tagline,
          }) => (
            <div key={id}>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={`${tagline}`}
                />
              ) : (
                <div>{`No photo :(`}</div>
              )}

              <div>
                <h2>
                  {title} ({release_date.slice(0, 4)})
                </h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <ul>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
        <div>
          <p>Additional information</p>
          <ul>
            <li key="cast">
              <Link to="cast">Cast</Link>
            </li>
            <li key="reviews">
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Fragment>
  );
};

export default MovieDetails;
