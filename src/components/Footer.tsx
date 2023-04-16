/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import navi from 'assets/icons/navi.svg';
import mail from 'assets/icons/mail.svg';
import phone from 'assets/icons/phone.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={navi} alt={navi} />
        <p>Halabyan 2a, Yerevan, Armenia</p>
        <img src={phone} alt={phone} />
        <p>eutumocc@tumo.org</p>
        <img src={mail} alt={mail} />
        <p>+374 10 398413</p>
      </footer>
    );
  }
}

export default Footer;
