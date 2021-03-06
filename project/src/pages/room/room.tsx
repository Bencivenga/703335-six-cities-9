import Header from '../../components/header/header';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import PlacesList from '../../components/places-list/places-list';
import Spinner from '../../components/spinner/spinner';
import AddToFavoritesBtn from '../../components/add-to-favorites-btn/add-to-favorites-btn';
import Map from '../../components/map/map';
import {AuthorizationStatus, MAX_OFFER_IMAGES, PlaceCardClass, AddToFavoriteBtnOption} from '../../const';
import {getRatingPercentage} from '../../utils';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {fetchReviewsAction, fetchNearOffersAction, fetchOfferAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getOffer, getOfferLoaded} from '../../store/offer-process/selectors';
import {getNearOffers} from '../../store/near-offers-process/selectors';

const handleOfferClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};


function Room(): JSX.Element | null {
  const {id} = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentOffer= useAppSelector(getOffer);
  const isOfferLoaded = useAppSelector(getOfferLoaded);
  const nearOffers = useAppSelector(getNearOffers);

  useEffect(() => {
    store.dispatch(fetchOfferAction(Number(id)));
    store.dispatch(fetchReviewsAction(Number(id)));
    store.dispatch(fetchNearOffersAction(Number(id)));
  }, [id]);

  if (!isOfferLoaded || !currentOffer || !nearOffers) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                currentOffer.images.slice(0, MAX_OFFER_IMAGES).map((image) => (
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
              {currentOffer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <AddToFavoritesBtn offer={currentOffer} options={AddToFavoriteBtnOption.ROOM_OPTIONS} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingPercentage(currentOffer.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {currentOffer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    currentOffer.goods.map((good) => (
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
                      src={currentOffer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro &&
                  <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList />
                {(authorizationStatus === AuthorizationStatus.Auth) && <ReviewsForm offerId={currentOffer.id}/>}
              </section>
            </div>
          </div>
          <Map
            className="property__map map"
            offers={nearOffers}
            selectedOffer={currentOffer}
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
              onPlaceCardClick={handleOfferClick}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
