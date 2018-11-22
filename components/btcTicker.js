import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";

export default class BtcTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: "someVal" };

    //Not sure if there is a better way to do this.
    this._onPressBtn = this._onPressBtn.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  _onPressBtn() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          dataSource: responseJSON.bpi.USD.rate,
          isLoading: false
        });
        console.log(this.state.dataSource);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
   
    if (this.state.isLoading) {
      return (
        <TouchableOpacity onPress={this._onPressBtn} style={styles.button1}>
          <Text>BTC</Text>
        </TouchableOpacity>
      );
    } else {
      return <Text style={styles.result}>{this.state.dataSource}</Text>;
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
