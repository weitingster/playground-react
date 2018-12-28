import { combineReducers } from 'redux';

export default combineReducers({
  dummyReplaceMe: () => 10 //make a dummy variable that returns any value to
  //trick redux into thinking we have a valid reducer to get the error message to go away until we have a good idea on how we'll arrange our reducers properly
});
