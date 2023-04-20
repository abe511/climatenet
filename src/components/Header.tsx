import React, { ReactElement } from 'react';

import logo from 'assets/images/TUMO-Labs_logo.svg';
import Menu from './Menu';

import 'styles/Header.css';

const menuLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Stations',
    to: '/stations',
  },
  {
    label: 'Station@Yerevan',
    to: '/stations/yerevan',
  },
  {
    label: 'Station@Dilijan',
    to: '/stations/dilijan',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'TUMO boxes',
    to: '/boxes',
  },
  {
    label: 'Contact us',
    to: '/contacts',
  },
];

const Header: React.FC<object> = (): ReactElement => {
  return (
    <header>
      <img className="logo icon" src={logo} alt={logo} />
      <Menu items={menuLinks} />
    </header>
  );
};

export default Header;
