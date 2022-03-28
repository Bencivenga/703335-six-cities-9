import leaflet, {LayerGroup, Map as LeafletMap} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MARKER_WIDTH, MARKER_HEIGHT, HALF_WIDTH_MARKER} from '../../const';
import useMap from '../../hooks/use-map';
import {Offer, Offers} from '../../types/offers';

type MapProps = {
  offers: Offers,
  selectedOffer: Offer | null,
  className: string,
};

const customDefaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [MARKER_WIDTH, MARKER_HEIGHT],
  iconAnchor: [HALF_WIDTH_MARKER, MARKER_HEIGHT],
});

const customActiveIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [MARKER_WIDTH, MARKER_HEIGHT],
  iconAnchor: [HALF_WIDTH_MARKER, MARKER_HEIGHT],
});

function Map({offers, selectedOffer, className}: MapProps) {
  const mapRef = useRef(null);
  const city = offers?.[0]?.city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    let layerGroup: LayerGroup;
    if (map) {
      const markers = offers.map((offer) => leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, {
        icon: customDefaultIcon,
      }));

      if (selectedOffer) {
        const activeMarker = leaflet.marker({
          lat: selectedOffer.location.latitude,
          lng: selectedOffer.location.longitude,
        }, {
          icon: customActiveIcon,
        });

        markers.push(activeMarker);
      }

      layerGroup = leaflet.layerGroup(markers);
      layerGroup.addTo(map);
    }

    return () => {
      if (map) {
        (map as LeafletMap).removeLayer(layerGroup);
      }
    };
  });

  return (
    <section
      className={className}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
