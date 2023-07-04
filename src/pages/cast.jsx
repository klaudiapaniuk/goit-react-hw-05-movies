import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import dataAPI from '../utils/APImovies';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const getCast = await dataAPI.getMovieCast(movieId);
        setCast(getCast.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <Fragment>
      <div>
        <ul>
          {cast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="200"
                />
              ) : (
                <div>{`No photo`}</div>
              )}
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Cast;
