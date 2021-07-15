import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Point extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          Win: {this.props.state.win} / Lose: {this.props.state.lose}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Point;
