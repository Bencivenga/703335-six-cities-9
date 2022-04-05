import {Offer} from '../../types/offers';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {addToFavoriteBtnOptions} from '../../const';
import AddToFavoritesBtn from '../add-to-favorites-btn/add-to-favorites-btn';

type FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id} = offer;

  return(
    <article className="favorites__card place-card">
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">
                              &#47;&nbsp;night
            </span>
          </div>
          <AddToFavoritesBtn offer={offer} options={addToFavoriteBtnOptions.PLACE_CARD_OPTIONS}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
