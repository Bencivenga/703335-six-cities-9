import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import PlacesList from '../../components/places-list/places-list';
import CitiesList from '../../components/cities/cities-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import {AuthorizationStatus, citiesList, PlaceCardClass} from '../../const';
import {useAppSelector} from '../../hooks';

function Main(): JSX.Element {
  const {activeCity, offers, hoveredOfferPin} = useAppSelector((state) => state);
  const cityOffers = offers.filter((offer) => offer.city.name === activeCity);

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

      <main className={`page__main page__main--index ${!cityOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={citiesList} />
        </div>
        <div className="cities">
          <div
            className={`cities__places-container container ${!cityOffers.length && 'cities__places-container--empty'}`}
          >
            {cityOffers.length !== 0 &&
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
              <Sorting />
              <PlacesList
                offers={cityOffers}
                placeCardType={PlaceCardClass.MainPlaceCard}
              />
            </section>}
            {!cityOffers.length &&
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
                </div>
              </section>}
            <div className="cities__right-section">
              {cityOffers.length &&
              <Map
                offers={cityOffers}
                selectedOffer={hoveredOfferPin}
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
