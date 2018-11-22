import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

  export default class LtcTicker extends React.Component {

	constructor(props){
    super(props);
    this.state = { isLoading: true}
  }

  _onPressBtn() {
    Alert.alert('LTC!')
  }

  render() {
    return (
      <View>
 
          <TouchableOpacity 
          onPress={this._onPressBtn}
          style={styles.button1}
          >  
              <Text>LTC</Text>
          
          </TouchableOpacity>
      </View>


    );
  }

}



const styles = StyleSheet.create({
  button1: {
    height: 50,   
    alignItems: 'center',
    color: 'blue'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});


