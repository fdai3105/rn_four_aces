import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Button1 from '../../Assets/Images/button1.svg';
import Button2 from '../../Assets/Images/button2.svg';
import Button3 from '../../Assets/Images/button3.svg';
import Button4 from '../../Assets/Images/button4.svg';
import {GameCards} from './CardItemComponent';

class BottomButtons extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.onSelect(GameCards.spadeAce);
          }}>
          <View
            style={
              this.props.selected.selectType.includes(GameCards.spadeAce)
                ? styles.activeStyle
                : styles.unActiveStyle
            }>
            <Button1 height={60} width={60} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.onSelect(GameCards.heartAce);
          }}>
          <View
            style={
              this.props.selected.selectType.includes(GameCards.heartAce)
                ? styles.activeStyle
                : styles.unActiveStyle
            }>
            <Button2 height={60} width={60} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.onSelect(GameCards.diamondAce);
          }}>
          <View
            style={
              this.props.selected.selectType.includes(GameCards.diamondAce)
                ? styles.activeStyle
                : styles.unActiveStyle
            }>
            <Button3 height={60} width={60} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.onSelect(GameCards.clubAce);
          }}>
          <View
            style={
              this.props.selected.selectType.includes(GameCards.clubAce)
                ? styles.activeStyle
                : styles.unActiveStyle
            }>
            <Button4 height={60} width={60} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  activeStyle: {
    borderWidth: 2,
    borderColor: '#ffcb00',
  },
  unActiveStyle: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
});

export default BottomButtons;
