import React, {useState, ChangeEvent} from 'react';
import {Ratings} from '../../const';

function RatingStars(): JSX.Element {
  const [, setRating] = useState(0);

  const onRatingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  return(
    <div className="reviews__rating-form form__rating">
      {Object.values(Ratings).map(({value, title}) => (
        <React.Fragment key={title}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
            onChange={onRatingChangeHandler}
          />
          <label
            className="reviews__rating-label form__rating-label"
            htmlFor={`${value}-stars`}
            title={title}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ))}

    </div>
  );
}

export default RatingStars;
