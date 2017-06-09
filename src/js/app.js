import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {Grid} from 'react-bootstrap';

import Home from './components/home/Home';
import Technologies from './components/home/Technologies';
import Skills from './components/home/Skills';
import Portfolio from './components/home/Portfolio';
import Education from './components/home/Education';
import Contacts from './components/home/Contacts';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import {loadStatData} from './actions/statAction.jsx';
import store from './store/AppStore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    this.state = store.getState();
    loadStatData();
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          {React.cloneElement(this.props.children, {statistic: this.state.statistic})}
        </Grid>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route
        component={App}
        path="/"
    >
      <IndexRoute
          component={Home}
      />
      <Route
          component={Technologies}
          path="/technologies"
      />
      <Route
          component={Skills}
          path="/skills"
      />
      <Route
          component={Portfolio}
          path="/portfolio"
      />
      <Route
          component={Education}
          path="/education"
      />
      <Route
          component={Contacts}
          path="/contacts"
      />
    </Route>
  </Router>),
document.getElementById('root'));
