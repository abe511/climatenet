import React, { ReactElement } from 'react';
import StationChart from 'components/StationChart';

// interface ProjectProps {}

const Projects: React.FC<object> = (): ReactElement => {
  const projects = ['Yerevan', 'Gyumri', 'Vanadzor'];
  return (
    <>
      <ul>
        {projects.map((item, idx) => {
          // eslint-disable-next-line react/no-array-index-key
          return <li key={idx}>{item}</li>;
        })}
      </ul>
      {/* <StationChart data={[2, 5, 6]} labels={['asd', 'dgdgf', 'qweqw']} /> */}
    </>
  );
};

export default Projects;
