import React, { ReactElement } from 'react';
import StationInterface from 'shared/StationInterface';

import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import stations from './stations.json';
import Station from './Station';

interface StationsProps {
  stations: StationInterface[];
}

const Stations: React.FC<StationsProps> = (): ReactElement => {
  return (
    <>
      <ul>
        <NavLink to="secret">secret station</NavLink>
        {stations.map((item) => {
          // RETURN A LINK WITH STATION COMPONENT WITH PROPS FROM THIS PROPS

          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={item.id}>
              <NavLink to={item.id}>{item.location}</NavLink>
              {/* {item.location} {item.lat} {item.lng} */}
              {/* <Routes>
              <Route path={`/stations/${item.location}`} element={<Station station={item} />} />
            </Routes> */}
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default Stations;
