import React, { ReactElement } from 'react';
import StationInterface from 'shared/StationInterface';
import StationChart from 'components/StationChart';

interface StationProps {
  station: StationInterface;
  // id: string;
}

const Station: React.FC<StationProps> = (): ReactElement => {
  // const { location, lat, lng } = station;
  return (
    <div>
      <p>secret station details</p>
      {/* <p>{location}</p>
      <p>{lat}</p>
      <p>{lng}</p>
      <StationChart /> */}
    </div>
  );
};

export default Station;
