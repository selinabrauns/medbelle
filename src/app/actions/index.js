import BasicAction from '../util/basicAction';
import Api from '../util/api';

export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export const getActivities = () => {
  Api.get('data/activities/properties', (data) => {
      console.log(data);
  });
};
