import React, {Component} from 'react';
import Header from '../../../global_components/Header';
//import Login from '../../../global_components/Login';
//import ActivityList from '../../../global_components/ActivityList';

import ActivityCard from '../../../global_components/ActivityCard';

import './page.scss';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Header />
          <div className="content">
            <ActivityCard name="Test" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est " />
          </div>
      </div>
    )
  }
}

export default Page;