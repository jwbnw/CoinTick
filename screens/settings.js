import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View styles={styles.introText}>
        <Text>settings page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  introText: {
    alignSelf: "center",
    padding: 10
  }
});
