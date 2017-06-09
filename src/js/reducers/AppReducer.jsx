import {combineReducers} from 'redux';
import {statistic} from './statReducer.jsx';
import {formdata} from './formReducer';

let AppReducer = combineReducers({
  statistic,
  formdata
});

export default AppReducer;
