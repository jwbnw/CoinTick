import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 50, backgroundColor: "powderblue" }} />
        <View style={styles.midView}>
          <Text>Settings Page</Text>
        </View>
        <View style={{ height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textt: {
    marginTop: 36
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
  }
});
