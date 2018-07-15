import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/RootContainer';
import Story from './containers/Story';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers
import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pass reducers
const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/story' component={Story} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
