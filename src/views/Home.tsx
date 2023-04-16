import React, { ReactElement } from 'react';
import Map from 'components/Map';

// interface HomeProps {}

const Home: React.FC<object> = (): ReactElement => {
  const coords = [
    { lat: 234, lng: 456 },
    { lat: 131, lng: 875 },
    { lat: 789, lng: 656 },
  ];

  return (
    <>
      <h1 className="title">Climate Net</h1>
      <h2 className="subtitle">Weather stations for Tumo boxes</h2>
      <Map locations={coords} />
      <h4 className="heading">What is Lorem Ipsum?</h4>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a
        long established fact that a reader will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using Content here, content here, making it
        look like readable English. Many desktop publishing packages and web page editors now use
        Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web
        sites still in their infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </p>
      <h4 className="heading">Why do we use it?</h4>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using Content here, content here,
        making it look like readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover
        many web sites still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose.
      </p>
    </>
  );
};

export default Home;
