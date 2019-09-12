import { combineReducers } from 'redux';
import datesReducer from './datesReducer';
import validationReducer from './validationReducer';

export default combineReducers({
    dates: datesReducer,
    error: validationReducer
});
