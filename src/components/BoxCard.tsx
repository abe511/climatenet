import React, { ReactElement } from 'react';

interface BoxCardProps {
  location: string;
  lat: number;
  lng: number;
  temp: number;
  humidity: number;
  windspeed: number;
}

const BoxCard: React.FC<BoxCardProps> = (props): ReactElement => {
  const { location, lat, lng, temp, humidity, windspeed } = props;
  return (
    <>
      <p>{location}</p>
      <p>{`Lat: ${lat}`}</p>
      <p>{`Lng: ${lng}`}</p>
      <p>{`Temperature (C): ${temp}`}</p>
      <p>{`Humidity: ${humidity}`}</p>
      <p>{`Wind Speed: ${windspeed}`}</p>
    </>
  );
};

export default BoxCard;
