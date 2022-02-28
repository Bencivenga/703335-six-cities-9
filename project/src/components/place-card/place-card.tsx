import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Offer} from '../../types/offers';

type PlaceCardPoprs = {
  offer: Offer;
};

function PlaceCard({offer}: PlaceCardPoprs) {
  const {previewImage, price, title, type, id, isPremium} = offer;
  const getCardStatusMark = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> :'';
  const [activeCardId, setActiveCardId] = useState(id);

  return (
    <article className="cities__place-card place-card" onMouseOver={() => {setActiveCardId(id);}}>
      {getCardStatusMark()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${activeCardId}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
