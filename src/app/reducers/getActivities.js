import { GET_ACTIVITIES } from '../actions';

const getActivities = (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVITIES: {
      return action.payload.data
    }

    default: {
      return state
    }
  }
};

export default getActivities;