import React, { Component } from 'react';
import { View, Image, StyleSheet  } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{paddingTop:20}}>
        <Image style={styles.stretch} source={require('./assets/icon.png')}/>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    borderColor:'red',
    borderWidth:5,
    borderTopRightRadius:20
  }
});
