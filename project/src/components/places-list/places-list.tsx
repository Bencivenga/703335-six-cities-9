import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';


type PlacesListProps = {
  offers: Offers,
  placeCardType: string,
}

function PlacesList({offers, placeCardType}: PlacesListProps): JSX.Element {
  return(
    <div className={`places__list ${placeCardType}`}>
      {offers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
          />
        ))}
    </div>
  );
}

export default PlacesList;
