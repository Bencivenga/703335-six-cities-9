import {Review} from '../../types/reviews';
import {getRatingPercentage} from '../../utils';
import dayjs from 'dayjs';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {id, date, rating, comment, user} = review;
  const {avatarUrl, name} = user;


  return(
    <li
      className="reviews__item"
      key={id}
    >
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingPercentage(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={dayjs(date).format('YYYY-MM-DD')}
        >
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
