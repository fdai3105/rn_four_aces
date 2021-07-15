import {gameReducer} from './GameReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({gameReducer});
export default allReducers;
