import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import dataAPI from '../utils/APImovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const reviews = await dataAPI.getMovieReviews(movieId);
        setReviews(reviews);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);

  return (
    <Fragment>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, id, content }) => (
              <li key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Reviews;
