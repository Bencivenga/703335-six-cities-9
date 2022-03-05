import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';

type PlacesListProps = {
  offers: Offers;
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default PlacesList;
