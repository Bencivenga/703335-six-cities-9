import Sorting from '../sorting/sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/offers';
import {PlaceCardClass} from '../../const';
import {useState} from 'react';

function Cities(): JSX.Element {
  const {activeCity, cityOffers} = useAppSelector(({OFFERS}) => OFFERS);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  return (
    <div className="cities">
      <div className={`cities__places-container container ${!cityOffers.length && 'cities__places-container--empty'}`}>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
          <Sorting />
          <PlacesList
            offers={cityOffers}
            placeCardType={PlaceCardClass.MainPlaceCard}
            onPlaceCardHover={setSelectedOffer}
            onPlaceCardLeave={() => setSelectedOffer(null)}
          />
        </section>
        <div className="cities__right-section">
          {cityOffers.length !== 0 &&
          <Map
            offers={cityOffers}
            selectedOffer={selectedOffer}
            className="cities__map map"
          />}
        </div>
      </div>
    </div>
  );
}

export default Cities;
