import React from 'react';
import Icon from '../Icon';

import './button.scss';

const Button = ({ children, className, whenClicked, iconName, type }) => (
  <button type={type && type} className={`btn ${className && className}`} onClick={() => whenClicked()}>
    {iconName ? <Icon iconName={iconName}/> : children}
  </button>
);

export default Button;