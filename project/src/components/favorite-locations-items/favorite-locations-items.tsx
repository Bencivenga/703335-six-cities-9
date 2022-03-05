import {Offers} from '../../types/offers';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import {Link} from 'react-router-dom';

type FavoriteLocationsItemsProps = {
  offers: Offers;
  city: string;
};

function FavoriteLocationsItems({offers, city}: FavoriteLocationsItemsProps): JSX.Element {
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) =>
            (
              <FavoriteCard offer={offer} key={offer.id} />
            ))
        }
      </div>
    </li>
  );
}

export default FavoriteLocationsItems;
