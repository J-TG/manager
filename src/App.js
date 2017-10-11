import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBLKcFWFYFZJTWg_25pB40hp4GxUK0pKek',
      authDomain: 'manager-92ef7.firebaseapp.com',
      databaseURL: 'https://manager-92ef7.firebaseio.com',
      projectId: 'manager-92ef7',
      storageBucket: 'manager-92ef7.appspot.com',
      messagingSenderId: '1090815616511'
};
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
