import React, { ReactElement } from 'react';
import StationInterface from 'shared/StationInterface';
import StationChart from 'components/StationChart';

interface StationProps {
  station: StationInterface;
}

const Station: React.FC<StationProps> = ({ station }): ReactElement => {
  const { location, lat, lng } = station;
  return (
    <div>
      <p>{location}</p>
      <p>{lat}</p>
      <p>{lng}</p>
      <StationChart />
    </div>
  );
};

export default Station;
