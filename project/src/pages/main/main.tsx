import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import PlacesList from '../../components/places-list/places-list';
import CitiesList from '../../components/cities/cities-list';
import Map from '../../components/map/map';
import {AuthorizationStatus, citiesList, PlaceCardClass} from '../../const';
import {Offers, Offer} from '../../types/offers';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fillOffer} from '../../store/actions';


type MainPageProps = {
  offers: Offers;
};

function Main({offers}: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const offerState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOffer(offers.filter((offer) => offer.city.name === offerState.city)));
  }, [offerState.city, dispatch, offers]);

  return (
    <div className="page page--gray page--main">
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

      <main className={`page__main page__main--index ${!offerState.offers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={citiesList} />
        </div>
        <div className="cities">
          <div
            className={`cities__places-container container ${!offerState.offers.length && 'cities__places-container--empty'}`}
          >
            {offerState.offers.length !== 0 &&
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerState.offers.length} places to stay in {offerState.city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                      Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                      Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                      Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                      Top rated first
                  </li>
                </ul>
              </form>
              <PlacesList
                offers={offers}
                onPlaceCardHover={setSelectedOffer}
                placeCardType={PlaceCardClass.MainPlaceCard}
              />
            </section>}
            {!offerState.offers.length &&
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {offerState.city}</p>
                </div>
              </section>}
            <div className="cities__right-section">
              {offerState.offers.length &&
              <Map
                city={offerState.offers[0].city}
                offers={offerState.offers}
                selectedOffer={selectedOffer}
                className="cities__map map"
              />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
