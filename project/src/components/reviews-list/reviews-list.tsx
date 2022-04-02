import ReviewsItem from '../reviews-item/reviews-item';
import {useAppSelector} from '../../hooks';

function ReviewsList(): JSX.Element {
  const {reviews} = useAppSelector((state) => state);

  return (
    <>
      {reviews.length > 0 &&
      <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>}
      {reviews.length > 0 &&
      <ul className="reviews__list">
        {
          reviews.map((review) =>(
            <ReviewsItem review={review} key={review.id} />
          ))
        }
      </ul>}
    </>
  );
}

export default ReviewsList;
