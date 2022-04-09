import ReviewsItem from '../reviews-item/reviews-item';
import {useAppSelector} from '../../hooks';
import {getReviews} from '../../store/reviews-data/selectors';
import {CommentOption} from '../../const';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector(getReviews);

  return (
    <>
      {reviews.length > 0 &&
      <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">{Math.min(reviews.length, CommentOption.maxCount)}</span>
      </h2>}
      {reviews.length > 0 &&
      <ul className="reviews__list">
        {
          reviews.slice(0, Math.min(reviews.length, CommentOption.maxCount)).map((review) =>(
            <ReviewsItem review={review} key={review.id} />
          ))
        }
      </ul>}
    </>
  );
}

export default ReviewsList;
