import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BlueIsCool extends Component {
  render() {
    return (
      <View style={{paddingTop:20}}>
        <Text style={{fontSize:32}} dataDetectorType="phoneNumber">18115622329</Text>
        <Text style={{fontSize:32}} dataDetectorType="link">https://www.baidu.com</Text>
        <Text style={{fontSize:32}} dataDetectorType="email">chenhao455@yeah.net</Text>
      </View>
    );
  }
}