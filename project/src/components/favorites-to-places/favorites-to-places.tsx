import {City} from '../../const';
import FavoritesList from '../favorites-list/favorites-list';
import {useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {getSameCityOffers} from '../../store/favorite-offers-process/selectors';

function FavoritesToPlaces(): JSX.Element {
  const sameCityOffers = useAppSelector(getSameCityOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(sameCityOffers).map((city, index) => {
          const keyValue = `${city}-${index}`;
          return (
            <li key={keyValue} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  {
                    Object.values(sameCityOffers)[index].length > 0 &&
                    <Link className="locations__item-link" to="#todo">
                      <span>{city}</span>
                    </Link>
                  }
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesList favoriteOffers={sameCityOffers[city as City]}/>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FavoritesToPlaces;
