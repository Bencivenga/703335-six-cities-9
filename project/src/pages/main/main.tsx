import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import PlacesList from '../../components/places-list/places-list';
import LocationTabItem from '../../components/location-tab-item/location-tab-item';
import Map from '../../components/map/map';
import {AuthorizationStatus} from '../../const';
import {Offers, Offer, PlaceCardType} from '../../types/offers';
import {useState} from 'react';

type MainPageProps = {
  placeOffersCount: number;
  cities: readonly['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  offers: Offers;
};

function Main({placeOffersCount, cities, offers}: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((item) => (
                <LocationTabItem city={item} key={Math.random()} />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeOffersCount} places to stay in Amsterdam</b>
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
                placeCardType={PlaceCardType.MainPlaceCard}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={offers[0].city}
                offers={offers}
                selectedOffer={selectedOffer}
                className="cities__map map"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
