import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import StationInterface from 'shared/StationInterface';
import StationChart from 'components/StationChart';

import stations from './stations.json';
import NotFound from './NotFound';

interface StationProps {
  // station: StationInterface;
  // id: string;
}

// const Station: React.FC<StationProps> = ({ station }): ReactElement => {
const Station: React.FC<StationProps> = (): ReactElement => {
  const { id } = useParams();
  // const { id, location, lat, lng } = station;
  const station = stations.find((item) => item.id === id);
  if (station) {
    return (
      <div>
        <p>{station.location} station details</p>
        <p>{station.id}</p>
        <p>{station.location}</p>
        <p>{station.lat}</p>
        <p>{station.lng}</p>
        {/* <StationChart /> */}
      </div>
    );
  }
  return <NotFound />;
};

export default Station;
