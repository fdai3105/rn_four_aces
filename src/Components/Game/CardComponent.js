import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import CardItemComponent from './CardItemComponent';

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
          type={this.props.selected.cards[0]}
          isSelect={
            this.props.selected.selectCard === this.props.selected.cards[0]
          }
          onPress={() => {
            this.props.onSelect(this.props.selected.cards[0]);
          }}
        />
        <CardItemComponent
          type={this.props.selected.cards[1]}
          isSelect={
            this.props.selected.selectCard === this.props.selected.cards[1]
          }
          onPress={() => {
            this.props.onSelect(this.props.selected.cards[1]);
          }}
        />
        <CardItemComponent
          type={this.props.selected.cards[2]}
          isSelect={
            this.props.selected.selectCard === this.props.selected.cards[2]
          }
          onPress={() => {
            this.props.onSelect(this.props.selected.cards[2]);
          }}
        />
        <CardItemComponent
          type={this.props.selected.cards[3]}
          isSelect={
            this.props.selected.selectCard === this.props.selected.cards[3]
          }
          onPress={() => {
            this.props.onSelect(this.props.selected.cards[3]);
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
