import { combineReducers } from 'redux';
import firstReducer from './first.reducer';
import secondReducer from './second.reducer';
import elementListReducer from './elementList.reducer';

const rootReducer = combineReducers({
    firstReducer,
    secondReducer,
    elementListReducer,
})

export default rootReducer;