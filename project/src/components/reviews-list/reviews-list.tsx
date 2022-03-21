import ReviewsItem from '../reviews-item/reviews-item';
import {Reviews} from '../../types/reviews';

type ReviewsProps = {
  reviews: Reviews;
};

function ReviewsList({reviews}: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.map((review) =>(
            <ReviewsItem review={review} key={review.id} />
          ))
        }
      </ul>
    </>
  );
}

export default ReviewsList;
