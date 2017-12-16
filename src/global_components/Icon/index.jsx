import React from 'React';

const Icon = ({ iconName, whenClicked }) => (
  <i className={`mdi mdi-${iconName}`} onClick={whenClicked ? whenClicked() : null}></i>
);

export default Icon;