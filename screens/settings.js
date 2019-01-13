import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CoinSelector from "../components/coinSelector.js";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveChanges = coinsToDisplay => {
    console.log(coinsToDisplay);
  };

  //need to grab values from coin selector on save

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 50, backgroundColor: "powderblue" }} />
        <View style={styles.midView}>
          <Text style={styles.coinSelectorHeaderText}>
            Choose Your Coins to Display
          </Text>
          <CoinSelector
            onRef={ref => (this.parentSaveReference = ref)}
            parentSaveReference={this.saveChanges.bind(this)}
          />
        </View>
        <View style={styles.botView}>
          <TouchableOpacity>
            <Text>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinSelectorHeaderText: {
    marginBottom: 10,
    textDecorationLine: "underline",
    fontSize: 16
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  midView: {
    alignItems: "center",
    justifyContent: "center"
  },
  botView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36
  }
});
