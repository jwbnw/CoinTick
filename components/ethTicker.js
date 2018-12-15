import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

import FadeInView from "./fadeIn.js";

export default class EthTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: "" };

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
        var price = parseFloat(responseJSON[0].price_usd).toFixed(2);
        this.setState({
          dataSource: price,
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
          <Image
            source={require("../assets/eth.png")}
            style={styles.resurelt}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <FadeInView>
          <TouchableOpacity
            onPress={this._onPressBtn1}
            style={styles.imageStyle}
          >
            <Text style={styles.resultTxt}>{"$" + this.state.dataSource}</Text>
          </TouchableOpacity>
        </FadeInView>
      );
    }
  }
}

const styles = StyleSheet.create({
  button1: {
    alignSelf: "center",
    padding: 10
  },
  imageStyle: {
    alignSelf: "center"
  },
  resultTxt: {
    paddingTop: 20,
    height: 100,
    fontSize: 26,
    textAlign: "center"
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
