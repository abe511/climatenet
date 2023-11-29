import React, { ReactElement } from 'react';

// interface TumoBoxesProps {}

const TumoBoxes: React.FC<object> = (): ReactElement => {
  const boxes = ['Yerevan', 'Gyumri', 'Vanadzor'];
  return (
    <ul>
      {boxes.map((item, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default TumoBoxes;
