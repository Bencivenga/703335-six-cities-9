import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {AuthorizationStatus, getRatingPerc, MAX_OFFER_IMAGES, PlaceCardClass} from '../../const';
import {offers} from '../../mocks/offers';
import {Reviews} from '../../types/reviews';
import {useLocation} from 'react-router-dom';

type RoomProps = {
  reviews: Reviews;
}

function Room({reviews}: RoomProps): JSX.Element {
  const location = useLocation();
  const pathSplit= location.pathname.split('/');
  const offerId = Number(pathSplit[pathSplit.length - 1]);
  const [currentOffer] = offers.filter((offer) => offer.id === offerId);
  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description} = currentOffer;
  const nearOffers = offers.slice(0, 3);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderAuth authorizationStatus={AuthorizationStatus.NoAuth} />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.slice(0, MAX_OFFER_IMAGES).map((image) => (
                  <div
                    className="property__image-wrapper"
                    key={image}
                  >
                    <img
                      className="property__image"
                      src={image}
                      alt="Studio"
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button${isFavorite ? ' property__bookmark-button--active' : ''} button`}
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingPerc(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good) => (
                      <li className="property__inside-item" key={good}>{good}</li>))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro &&
                  <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map
            className="property__map map"
            city={currentOffer.city}
            offers={nearOffers}
            selectedOffer={null}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
                Other places in the neighbourhood
            </h2>
            <PlacesList
              offers={nearOffers}
              placeCardType={PlaceCardClass.NearPlaceCard}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
