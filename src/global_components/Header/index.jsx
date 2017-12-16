import React from 'react';
import Icon from '../Icon';
import './header.scss';

const Header = () => (
  <div className="header">
    <img src="assets/medbelle-logo.png" />
    <Icon iconName="logout" />
  </div>
);

export default Header;