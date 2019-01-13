import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Picker } from "react-native";

export default class CoinSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin1: "bitcoin",
      coin2: "litecoin",
      coin3: "ethereum"
    };
  }

  handleSaveData = () => {
    var coins = [this.state.coin1, this.state.coin2, this.state.coin3];
    this.props.parentSaveReference(coins);
  };

  updateChoice1 = choice => {
    this.setState({ coin1: choice });
  };

  updateChoice2 = choice => {
    this.setState({ coin2: choice });
  };

  updateChoice3 = choice => {
    this.setState({ coin3: choice });
  };

  /*
-- What to Do? --

- Make the picker boxes look nicer
- Add more coins

*/
  render() {
    this.handleSaveData();
    return (
      <View>
        <Picker
          selectedValue={this.state.coin1}
          onValueChange={this.updateChoice1}
          style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="Bitcoin" value="bitcoin" />
          <Picker.Item label="Litecoin" value="litecoin" />
          <Picker.Item label="Ethereum" value="ethereum" />
        </Picker>
        <Picker
          selectedValue={this.state.coin2}
          onValueChange={this.updateChoice2}
          style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="Bitcoin" value="bitcoin" />
          <Picker.Item label="Litecoin" value="litecoin" />
          <Picker.Item label="Ethereum" value="ethereum" />
        </Picker>
        <Picker
          selectedValue={this.state.coin3}
          onValueChange={this.updateChoice3}
          style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="Bitcoin" value="bitcoin" />
          <Picker.Item label="Litecoin" value="litecoin" />
          <Picker.Item label="Ethereum" value="ethereum" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center"
  }
});
