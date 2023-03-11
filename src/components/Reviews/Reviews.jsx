import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { ReviewsList } from './Reviews.styled';
import { ReviewCard } from 'components/ReviewCard';
import { Notification } from 'components/Notification';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);


  useEffect(() => {
    async function fetchMovieReviews(movieId) {
      try {
        const reviews = await API.getMovieReviews(movieId);
        setMovieReviews(reviews);
        setError(false);
      } catch {
        setError(true);
      }
    }

  fetchMovieReviews(movieId)
  }, [movieId]);


  if (!movieReviews) {
    return null;
  }

  return (
    <>
      {/* {error && <p>Something went wrong. Please try again</p> } */}
      {movieReviews.length === 0
        ? (<Notification>Sorry, but there are no reviews for this movie.</Notification>)
        : (
          <ReviewsList>
            {movieReviews.map(review => (
              <li key={review.id}>
                <ReviewCard review={review}></ReviewCard>
              </li>
            ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;