import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Constants, WebBrowser } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }} style={{width: 193, height: 110}} />
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <FontAwesome.Button
          name="facebook"
          color="#ff0000"
          backgroundColor="#3b5998"
          size={35}
          onPress={this._handleOpenWithWebBrowser}>
          Login with Facebook
        </FontAwesome.Button>
        <Button
          title="Open URL with ReactNative.Linking"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="Open URL with Expo.WebBrowser"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
      </View>
    );
  }

  _handleOpenWithLinking = () => {
    Linking.openURL('https://expo.io');
  }

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
  },
});
