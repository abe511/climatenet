import React, { ReactElement } from 'react';

// interface ContactsProps {}

const Contacts: React.FC<object> = (): ReactElement => {
  const contacts = ['Yerevan', 'Gyumri', 'Vanadzor'];
  return (
    <ul>
      {contacts.map((item, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default Contacts;
