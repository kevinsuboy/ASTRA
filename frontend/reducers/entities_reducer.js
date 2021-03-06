import { combineReducers } from 'redux';
import usersReducer from "./session/users_reducers";
import routesReducer from './routes/routes_reducer';
import workoutsReducer from'./workouts/workouts_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  routes: routesReducer,
  workouts: workoutsReducer
});

export default entitiesReducer;