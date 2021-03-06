import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import {createStore} from 'redux';
import allReducers from './src/Reducers';

let store = createStore(allReducers);
const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => MyApp);
