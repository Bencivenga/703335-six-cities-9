import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/offers';


type PlacesListProps = {
  offers: Offers,
  onPlaceCardHover?: (offer: Offer) => void,
  placeCardType: string,
}

function PlacesList({offers, onPlaceCardHover, placeCardType}: PlacesListProps): JSX.Element {
  return(
    <div className={`places__list ${placeCardType}`}>
      {offers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={onPlaceCardHover}
          />
        ))}
    </div>
  );
}

export default PlacesList;
