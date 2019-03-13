import React, { Component } from 'react';
import './App.css';
import AppRoute from './routes';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </div>
    );
  }
}

export default App;
