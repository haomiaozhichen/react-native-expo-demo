import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Platform, Text } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    //const Component = Platform.select({
    //  ios: <Text>ios Text组件</Text>, //() => require("ComponentIOS"),
    //  android: <Text>android Text组件</Text> //() => require("ComponentAndroid")
    //})();
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text>当前平台是：{Platform.OS} 平台版本：{Platform.Version}</Text>
        </View>
        <View style={styles.textView}>
            <Text>我在ios 安卓上 UI不一样</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textView: {
    margin: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "red",
        color: "blue"
      },
      android: {
        backgroundColor: "green"
      }
    })
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})