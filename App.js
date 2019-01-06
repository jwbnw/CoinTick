import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
  Text
} from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import BtcTicker from "./components/btcTicker.js";
import LtcTicker from "./components/ltcTicker.js";
import EthTicker from "./components/ethTicker.js";
import SettingsScreen from "./screens/settings.js";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSpace}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Text style={{ textAlign: "right" }}>Settings</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  tokenContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  topSpace: {
    flex: 1,
    justifyContent: "flex-start",
    marginRight: 36,
    marginTop: 36
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
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
