import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomButton from './Containers/Game/BottomButton';
import CardComponent from './Containers/Game/CardComponent';
import Point from './Containers/Game/Point';

class App extends Component {
  render() {
    return (
      <View style={styles.View}>
        <CardComponent />
        <Point />
        <BottomButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {flex: 1, backgroundColor: '#2F2924'},
});

export default App;
