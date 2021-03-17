import React from 'react';

import { MapContainer, TileLayer, Tooltip, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Container } from './styles';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  location: [number, number] | undefined;
  excLocation: [number, number];
  cityLocation: string;
}

const Map: React.FC<Props> = ({ location, excLocation, cityLocation }) => {
  const openPopup = (marker: any) => {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup();
      });
    }
  };
  return (
    <Container>
      <MapContainer
        center={location}
        zoom={6}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZm9sZmVyIiwiYSI6ImNqenBsN2FxZTBlanEzam1pMHNlNmZ6NXAifQ.i4p5E_oAF_Q65e-HeH2y7w" />
        <Circle ref={openPopup} center={excLocation} radius={20000}>
          <Tooltip permanent>
            <span>{cityLocation}</span>
          </Tooltip>
        </Circle>
      </MapContainer>
    </Container>
  );
};

export default Map;
