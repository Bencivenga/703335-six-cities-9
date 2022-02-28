import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import FavoriteLocationsItems from '../../components/favorite-locations-items/favorite-locations-items';
import {AuthorizationStatus} from '../../const';
import {Offers, Offer} from '../../types/offers';

type FavoriteProps = {
  offers: Offers;
}

type SameCityOffers = {
  [key: string]: Offer[];
}

function Favorites({offers}: FavoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const sameCityOffers: SameCityOffers = {};

  favoriteOffers.forEach((offer) => {
    const city = offer.city.name;

    if (sameCityOffers[city] === undefined) {
      sameCityOffers[city] = [];
    }

    sameCityOffers[city].push(offer);
  });

  const isEmpty = favoriteOffers.length ?
    (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(sameCityOffers).map((city) => (
                  <FavoriteLocationsItems
                    city={city}
                    offers={sameCityOffers[city]}
                    key={city}
                  />
                ))
              }
            </ul>
          </section>
        </div>
      </main>
    ) :
    (
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
    );

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
      {isEmpty}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
