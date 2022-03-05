import FavoriteLocationsItems from '../../components/favorite-locations-items/favorite-locations-items';
import {Offers, Offer} from '../../types/offers';

type FavoriteProps = {
  offers: Offers;
}

type SameCityOffers = {
  [key: string]: Offer[];
}


function FavoritesList({offers}: FavoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const sameCityOffers: SameCityOffers = {};

  favoriteOffers.forEach((offer) => {
    const city = offer.city.name;

    if (!sameCityOffers[city]) {
      sameCityOffers[city] = [];
    }

    sameCityOffers[city].push(offer);
  });


  if (favoriteOffers.length) {
    return (
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
    );
  }

  return (
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
}

export default FavoritesList;
