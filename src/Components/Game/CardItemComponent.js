import React, {Component} from 'react';
import Front1 from '../../Assets/Images/front1.svg';
import Front2 from '../../Assets/Images/front2.svg';
import Front3 from '../../Assets/Images/front3.svg';
import Front4 from '../../Assets/Images/front4.svg';
import Back from '../../Assets/Images/back.svg';
import {Dimensions, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export const GameCards = Object.freeze({
  spadeAce: Symbol('spade-ace'),
  heartAce: Symbol('heart-ace'),
  diamondAce: Symbol('diamond-ace'),
  clubAce: Symbol('club-ace'),
  none: Symbol('none'),
});

class CardItemComponent extends Component {
  render() {
    switch (this.props.type) {
      case GameCards.spadeAce:
        if (this.props.isSelect) {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Front1 style={styles.card} />
            </TouchableWithoutFeedback>
          );
        } else {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Back style={styles.card} />
            </TouchableWithoutFeedback>
          );
        }
      case GameCards.heartAce:
        if (this.props.isSelect) {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Front2 style={styles.card} />
            </TouchableWithoutFeedback>
          );
        } else {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Back style={styles.card} />
            </TouchableWithoutFeedback>
          );
        }
      case GameCards.diamondAce:
        if (this.props.isSelect) {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Front3 style={[styles.card]} />
            </TouchableWithoutFeedback>
          );
        } else {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Back style={[styles.card]} />
            </TouchableWithoutFeedback>
          );
        }
      case GameCards.clubAce:
        if (this.props.isSelect) {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Front4 style={[styles.card]} />
            </TouchableWithoutFeedback>
          );
        } else {
          return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <Back style={[styles.card]} />
            </TouchableWithoutFeedback>
          );
        }
      case GameCards.none:
        break;
    }
  }
}

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: Dimensions.get('window').width / 2,
    flex: 1,
  },
});

export default CardItemComponent;
