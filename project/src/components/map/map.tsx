import leaflet, {LayerGroup, Map as LeafletMap} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {MarkerOption} from '../../const';
import useMap from '../../hooks/use-map';
import {Offer, Offers} from '../../types/offers';

type MapProps = {
  offers: Offers,
  selectedOffer: Offer | null,
  className: string,
};

const HALF_MARKER_WIDTH = 0.5 * MarkerOption.MarkerWidth;

const customDefaultIcon = leaflet.icon({
  iconUrl: MarkerOption.MarkerDefault,
  iconSize: [MarkerOption.MarkerWidth, MarkerOption.MarkerHeight],
  iconAnchor: [HALF_MARKER_WIDTH, MarkerOption.MarkerHeight],
});

const customActiveIcon = leaflet.icon({
  iconUrl: MarkerOption.MarkerCurrent,
  iconSize: [MarkerOption.MarkerWidth, MarkerOption.MarkerHeight],
  iconAnchor: [HALF_MARKER_WIDTH, MarkerOption.MarkerHeight],
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
