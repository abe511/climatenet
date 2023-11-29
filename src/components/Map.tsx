import React, { ReactElement, ReactNode } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import 'styles/Map.css';
import redMarker from 'assets/icons/red-marker.svg';
import blueMarker from 'assets/icons/blue-marker.svg';
import StationInterface from 'shared/StationInterface';
import BoxCard from './BoxCard';
// import map from 'assets/images/Map.png';

const markerTypes = [redMarker, blueMarker];

export interface MapProps {
  stations: StationInterface[];
}

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ stations }): ReactElement => {
  return (
    <MapContainer className="map" center={[40, 45]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution={attribution}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((item): ReactNode => {
        const icon = new L.Icon({
          iconUrl: markerTypes[item.marker],
          iconSize: [24, 24],
        });
        return (
          <Marker key={item.lat + item.lng} position={[item.lat, item.lng]} icon={icon}>
            <Popup className="popup">
              <BoxCard
                location={item.location}
                lat={item.lat}
                lng={item.lng}
                temp={15}
                humidity={345}
                windspeed={123}
              />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
  // return <img src={map} alt={map} className="map" />;
};

export default Map;
