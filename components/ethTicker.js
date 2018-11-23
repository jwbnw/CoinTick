import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";

import FadeInView from "./fadeIn.js";

export default class EthTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };

    this._onPressBtn = this._onPressBtn.bind(this);
    this._onPressBtn1 = this._onPressBtn1.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  _onPressBtn() {
    this.fetchData();
  }

  _onPressBtn1() {
    this.setState({
      isLoading: true
    });
  }

  fetchData() {
    fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/")
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          dataSource: responseJSON[0].price_usd,
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <TouchableOpacity onPress={this._onPressBtn} style={styles.button1}>
          <Text>ETH</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <FadeInView>
          <TouchableOpacity onPress={this._onPressBtn1} style={styles.button1}>
            <Text style={styles.result}>{this.state.dataSource}</Text>
          </TouchableOpacity>
        </FadeInView>
      );
    }
  }
}

const styles = StyleSheet.create({
  button1: {
    height: 50,
    alignSelf: "center",
    color: "blue"
  },
  result: {
    alignSelf: "center",
    height: 50
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
