import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  View,
  Linking,
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
        <View style={styles.topSpace} />
        <View style={styles.tokenContainer}>
          <BtcTicker />
          <LtcTicker />
          <EthTicker />
        </View>
        <View style={styles.bottom}>
          <Text>
            Price provided by&nbsp;
            <Text
              style={styles.linkStyle}
              onPress={() => Linking.openURL("https://coinmarketcap.com/")}
            >
              CoinMarketCap
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  tokenContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  topSpace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  buttonText: {
    padding: 20,
    color: "white"
  },
  linkStyle: {
    color: "blue",
    textDecorationLine: "underline"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  }
});
