import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/offers';

type PlacesListProps = {
  offers: Offers;
  onPlaceCardHover(offer: Offer): void;
}

function PlacesList({offers, onPlaceCardHover}: PlacesListProps): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
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
