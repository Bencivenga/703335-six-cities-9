import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MARKER_WIDTH, MARKER_HEIGHT, HALF_WIDTH_MARKER} from '../../const';
import useMap from '../../hooks/use-map';
import {City, Offer, Offers} from '../../types/offers';

type MapProps = {
  city: City,
  offers: Offers,
  selectedOffer: Offer | null,
  className: string,
};

const getIcon = (selectedOffer: Offer | null, offer: Offer) => {

  if (selectedOffer !== null && selectedOffer.id === offer.id) {
    return new Icon({
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [MARKER_WIDTH, MARKER_HEIGHT],
      iconAnchor: [HALF_WIDTH_MARKER, MARKER_HEIGHT],
    });
  }

  return new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [MARKER_WIDTH, MARKER_HEIGHT],
    iconAnchor: [HALF_WIDTH_MARKER, MARKER_HEIGHT],
  });
};

const markers: Marker[] = [];

function Map({city, offers, selectedOffer, className}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        const icon = getIcon(selectedOffer, offer);

        marker
          .setIcon(icon)
          .addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      markers.forEach((marker) => marker.remove());
      markers.length = 0;
    };
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={className}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
