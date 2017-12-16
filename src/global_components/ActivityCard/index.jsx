import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import './activity-card.scss';

const ActivityCard = ({ name, updated, recommendation, weather, time,
  ownerId, image, category, description, groupActivity, objectId, nextPossibleDate, created }) => (
  <div className="activity-card">
    <div className="activity-info">
      <div className="activity-header">
        <h3>{name}</h3>
        <Icon iconName={groupActivity ? 'account-multiple' : 'account'} />
      </div>
      <img src={image} />
      <p className="activity-description">{description}</p>
    </div>
    <div className="activity-actions">
      <Button iconName="delete" className="delete" />
      <Button iconName="pencil" className="edit" />
    </div>
  </div>
);

export default ActivityCard;