import React, { ReactElement } from 'react';

// interface ProjectProps {}

const Projects: React.FC<object> = (): ReactElement => {
  const projects = ['Yerevan', 'Gyumri', 'Vanadzor'];
  return (
    <ul>
      {projects.map((item, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default Projects;
