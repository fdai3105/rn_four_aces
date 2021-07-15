import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import CardItemComponent, {GameCards} from './CardItemComponent';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.View}>
        <Modal
          animationType={'fade'}
          visible={this.props.selected.showDialog === true}
          transparent
          presentationStyle={'overFullScreen'}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.47)',
              flex: 1,
              paddingHorizontal: 40,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                top: '50%',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
                {this.props.selected.isWin ? 'Win' : 'Lose'}
              </Text>
              <Button
                title={'Continue'}
                onPress={() => {
                  this.props.onDismiss();
                }}
              />
            </View>
          </View>
        </Modal>
        <CardItemComponent
          type={GameCards.spadeAce}
          isSelect={this.props.selected.selectCard === GameCards.spadeAce}
          onPress={() => {
            this.props.onSelect(GameCards.spadeAce);
          }}
        />
        <CardItemComponent
          type={GameCards.heartAce}
          isSelect={this.props.selected.selectCard === GameCards.heartAce}
          onPress={() => {
            this.props.onSelect(GameCards.heartAce);
          }}
        />
        <CardItemComponent
          type={GameCards.diamondAce}
          isSelect={this.props.selected.selectCard === GameCards.diamondAce}
          onPress={() => {
            this.props.onSelect(GameCards.diamondAce);
          }}
        />
        <CardItemComponent
          type={GameCards.clubAce}
          isSelect={this.props.selected.selectCard === GameCards.clubAce}
          onPress={() => {
            this.props.onSelect(GameCards.clubAce);
          }}
        />
      </View>
    );
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
