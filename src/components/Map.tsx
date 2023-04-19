import React, { ReactElement } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import map from 'assets/images/Map.png';

export interface MapProps {
  locations: { lat: number; lng: number }[];
}

// const center = [44, 44];
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ locations }): ReactElement => {
  return (
    <MapContainer style={{ height: '400px' }} center={[40, 45]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution={attribution}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40, 45]}>
        <Popup>some description here</Popup>
      </Marker>
    </MapContainer>
  );
  // return <img src={map} alt={map} className="map" />;
};

export default Map;
