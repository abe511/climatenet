/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import logo from 'assets/images/TUMO-Labs_logo.svg';
import Menu from './Menu';

import 'styles/Header.css';

class Header extends Component {
  menuLinks = [
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

  render() {
    return (
      <header>
        <img className="logo icon" src={logo} alt={logo} />
        <Menu items={this.menuLinks} />
      </header>
    );
  }
}

export default Header;
