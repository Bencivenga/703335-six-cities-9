import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {AppRoute} from '../../const';
import {getRatingPerc} from '../../utils';

type PlaceCardProps = {
  offer: Offer,
  onMouseOver?: (offer: Offer) => void,
  onMouseLeave?: () => void,
};

function PlaceCard({offer, onMouseOver = () => void 0, onMouseLeave = () => void 0}: PlaceCardProps) {
  const {previewImage, price, title, type, id, rating, isPremium} = offer;

  const handleMouseOver = () => {
    onMouseOver(offer);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
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
            <span style={{width: `${getRatingPerc(rating)}%`}}></span>
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
