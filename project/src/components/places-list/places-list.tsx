import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/offers';
import {memo} from 'react';


type PlacesListProps = {
  offers: Offers,
  placeCardType: string,
  onPlaceCardHover?: (offer: Offer) => void,
  onPlaceCardLeave?: () => void,
  onPlaceCardClick?: () => void,
}

function PlacesList({offers, placeCardType, onPlaceCardHover, onPlaceCardLeave, onPlaceCardClick}: PlacesListProps): JSX.Element {
  return(
    <div className={`places__list ${placeCardType}`}>
      {offers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={onPlaceCardHover}
            onMouseLeave={onPlaceCardLeave}
            onClick={onPlaceCardClick}
          />
        ))}
    </div>
  );
}

export default memo(PlacesList, (prev, next) => prev.offers === next.offers);
