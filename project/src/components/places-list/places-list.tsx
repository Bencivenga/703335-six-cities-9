import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/offers';


type PlacesListProps = {
  offers: Offers,
  placeCardType: string,
  onPlaceCardHover?: (offer: Offer) => void,
  onPlaceCardLeave?: () => void,
}

function PlacesList({offers, placeCardType, onPlaceCardHover, onPlaceCardLeave}: PlacesListProps): JSX.Element {
  return(
    <div className={`places__list ${placeCardType}`}>
      {offers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={onPlaceCardHover}
            onMouseLeave={onPlaceCardLeave}
          />
        ))}
    </div>
  );
}

export default PlacesList;
