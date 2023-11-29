import React, { ReactElement } from 'react';
import map from 'assets/images/Map.png';

export interface MapProps {
  locations: { lat: number; lng: number }[];
}

const Map: React.FC<MapProps> = ({ locations }): ReactElement => {
  console.log(locations);
  return <img src={map} alt={map} className="map" />;
};

export default Map;
