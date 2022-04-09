import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {AppRoute, AddToFavoriteBtnOption} from '../../const';
import {getRatingPercentage} from '../../utils';
import AddToFavoritesBtn from '../add-to-favorites-btn/add-to-favorites-btn';
import {store} from '../../store';
import {changeOfferLoadedAction} from '../../store/offer-process/offer-process';
import {fetchOfferAction} from '../../store/api-actions';

type PlaceCardProps = {
  offer: Offer,
  onMouseOver?: (offer: Offer) => void,
  onMouseLeave?: () => void,
  onClick?:() => void,
};

function PlaceCard({offer, onMouseOver = () => void 0, onMouseLeave = () => void 0, onClick = () => 0}: PlaceCardProps) {
  const {previewImage, price, title, type, id, rating, isPremium} = offer;

  const handleMouseOver = () => {
    onMouseOver(offer);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const handlePlaceCardClick = () => {
    onClick();
  };

  const handleFetchOffer = () => {
    store.dispatch(changeOfferLoadedAction(false));
    store.dispatch(fetchOfferAction(id));
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handlePlaceCardClick}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`} onClick={handleFetchOffer}>
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
          <AddToFavoritesBtn offer={offer} options={AddToFavoriteBtnOption.PLACE_CARD_OPTIONS}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercentage(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`} onClick={handleFetchOffer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
