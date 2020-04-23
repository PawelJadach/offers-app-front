import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { HashRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk))
  );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
