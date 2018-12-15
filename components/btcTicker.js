import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import FadeInView from "./fadeIn.js";

export default class BtcTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: "" };

    //Not sure if there is a better way to do this.
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
    fetch("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
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
            source={require("../assets/btc.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <FadeInView>
          <TouchableOpacity onPress={this._onPressBtn1} style={styles.button1}>
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
    height: 82, //match image size
    fontSize: 26,
    textAlign: "center",
    paddingTop: 20
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
