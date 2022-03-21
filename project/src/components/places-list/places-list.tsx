import PlaceCard from '../place-card/place-card';
import {Offers, Offer, PlaceCardType} from '../../types/offers';

type PlacesListProps = {
  offers: Offers,
  onPlaceCardHover?: (offer: Offer) => void,
  placeCardType: PlaceCardType,
}

function PlacesList({offers, onPlaceCardHover, placeCardType}: PlacesListProps): JSX.Element {

  const getContainerClassName = (type: PlaceCardType) => {
    switch (type) {
      case PlaceCardType.MainPlaceCard:
        return 'cities__places-list tabs__content';
      case PlaceCardType.NearPlaceCard:
        return 'near-places__list';
    }
  };

  return(
    <div className={`places__list ${getContainerClassName(placeCardType)}`}>
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
