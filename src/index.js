/**
 * Sample React Native Index
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const Index = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </>
);

export default Index;
