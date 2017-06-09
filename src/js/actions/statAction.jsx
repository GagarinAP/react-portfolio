import axios from 'axios';
import {ACTION_TYPES} from './../constants/constants.jsx';
import store from './../store/AppStore.jsx';

export function loadStatData () {
  axios.get('https://haharin.herokuapp.com/statistic-chart')
    .then(response => {
      store.dispatch({
        type: ACTION_TYPES.LOAD_STAT,
        statistic: response
      });
    })
    .catch(function (error) {
      return (error);
    });
}

export function loadFormData (name, email, text) {
  axios.post('https://haharin.herokuapp.com/send-message', {
    name: name,
    email: email,
    text: text
  })
    .then(response => {
      store.dispatch({
        type: ACTION_TYPES.LOAD_FORM,
        formdata: response
      });
    })
    .catch(function (error) {
      return (error);
    });
}
