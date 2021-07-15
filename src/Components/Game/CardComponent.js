import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import CardItemComponent, {GameCards} from './CardItemComponent';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.View}>
        <CardItemComponent
          type={GameCards.clubAce}
          isSelect={this.props.selected.selectCard === GameCards.clubAce}
          onPress={() => {
            this.props.onSelect(GameCards.clubAce);
            this.dialog();
          }}
        />
        <CardItemComponent
          type={GameCards.diamondAce}
          isSelect={this.props.selected.selectCard === GameCards.diamondAce}
          onPress={() => {
            this.props.onSelect(GameCards.diamondAce);
            this.dialog();
          }}
        />
        <CardItemComponent
          type={GameCards.spadeAce}
          isSelect={this.props.selected.selectCard === GameCards.spadeAce}
          onPress={() => {
            this.props.onSelect(GameCards.spadeAce);
            this.dialog();
          }}
        />
        <CardItemComponent
          type={GameCards.heartAce}
          isSelect={this.props.selected.selectCard === GameCards.heartAce}
          onPress={() => {
            this.props.onSelect(GameCards.heartAce);
            this.dialog();
          }}
        />
      </View>
    );
  }

  dialog() {
    console.log(this.props.selected);
    if (this.props.selected.isWin) {
      Alert.alert('Win', '', [
        {
          text: 'cancel',
          onPress: () => {
            this.props.onReset();
          },
        },
      ]);
    } else {
      Alert.alert('Lose', '', [
        {
          text: 'cancel',
          onPress: () => {
            this.props.onReset();
          },
        },
      ]);
    }
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export default CardComponent;
