import { combineReducers } from 'redux';

import TokenReducer from './tokensReducers'
import FavouritesReducer from './favouriteReducer'
import SubmitReducer from './submitReducer'

const allReducers = combineReducers({
    tokens: TokenReducer,
    favourite: FavouritesReducer,
    submit: SubmitReducer,
})

export default allReducers;
