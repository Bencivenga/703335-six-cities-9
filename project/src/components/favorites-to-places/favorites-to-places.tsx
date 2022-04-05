import {citiesList} from '../../const';
import FavoritesList from '../favorites-list/favorites-list';
import {useAppSelector} from '../../hooks';

function FavoritesToPlaces(): JSX.Element {
  const {favoriteOffers} = useAppSelector(({FAVORITE_OFFERS}) => FAVORITE_OFFERS);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesList.map((city,id) => {
          const keyValue = `${id}-${city}`;
          const offers = favoriteOffers.filter((offer) => offer.city.name === city);
          if(offers.length > 0){
            return (
              <li key={keyValue} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesList favoriteOffers={offers}/>
                </div>
              </li>
            );
          }

          return null;
        })}
      </ul>
    </section>
  );
}

export default FavoritesToPlaces;
