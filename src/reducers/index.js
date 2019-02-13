import { combineReducers } from 'redux';

import SubmitReducer from './submitReducer'

const allReducers = combineReducers({
    submit: SubmitReducer,
})

export default allReducers;
