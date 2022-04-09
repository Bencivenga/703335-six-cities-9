import {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import RatingStar from '../rating-star/rating-star';
import {Ratings, CommentOption} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sendReviewAction} from '../../store/api-actions';
import {changeDataLoaded} from '../../store/reviews-data/reviews-data';
import {getDataLoaded} from '../../store/reviews-data/selectors';


type ReviewsFormProps = {
  offerId: number;
}

function ReviewsForm({offerId}: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const isDataLoaded = useAppSelector(getDataLoaded);

  useEffect(() => {
    setDisabled(!(comment.length >= CommentOption.minLength && rating > 0));
  }, [comment, rating]);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(changeDataLoaded(false));
    dispatch(sendReviewAction({hotelId: offerId, comment: {comment, rating}}));
    setRating(0);
    setComment('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Ratings.map((value, index) => {
          const keyValue = `${index}-${value}`;
          return (
            <RatingStar
              key={keyValue}
              title={value}
              index={index + 1}
              checked={rating === index + 1}
              onChangeHandler={handleRatingChange}
            />
          );
        }).reverse()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={CommentOption.minLength}
        maxLength={CommentOption.maxLength}
        onChange={handleTextAreaChange}
        value={comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>
          {isDataLoaded ? 'Submit' :  '...Loading'}
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
