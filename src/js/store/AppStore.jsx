import AppReducer from './../reducers/AppReducer.jsx';
import {createStore} from 'redux';

let store = createStore(AppReducer, {
  statistic: {},
  formdata: {}
});

export default store;
