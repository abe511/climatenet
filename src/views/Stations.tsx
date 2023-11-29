import React, { ReactElement } from 'react';

// interface StationsProps {}

const Stations: React.FC<object> = (): ReactElement => {
  const stations = ['Yerevan', 'Gyumri', 'Vanadzor'];
  return (
    <ul>
      {stations.map((item, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default Stations;
