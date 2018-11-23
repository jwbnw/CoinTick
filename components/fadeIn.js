import React from "react";
import { Animated, Text, View } from "react-native";

export default class FadeInView extends React.Component {
  state = {
    fadeAim: new Animated.Value(0) // opacity:0
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAim, {
      toValue: 1,
      duration: 5000
    }).start();
  }

  render() {
    let { fadeAim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
