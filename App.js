import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";

import BtcTicker from "./components/btcTicker.js";
import LtcTicker from "./components/ltcTicker.js";
import EthTicker from "./components/ethTicker.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    return (
      <View style={styles.container}>
        <BtcTicker />
        <LtcTicker />
        <EthTicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  buttonText: {
    padding: 20,
    color: "white"
  }
});
