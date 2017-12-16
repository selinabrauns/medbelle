import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../app/actions';
import ActivityCard from '../ActivityCard';
import './activity-list.scss';

class ActivityList extends Component {

  componentDidMount() {
    //this.props
  }

  render() {
    const { activities } = this.props;
    return <div className="activity-list">
      {activities && activities.length > 0 ? activities.forEach((activity, idx) => (
        <ActivityCard name={activity.name} />
      )) : null}
    </div>
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {}
};

const mapDispatchToProps = actions;

//export default ActivityList;
export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);