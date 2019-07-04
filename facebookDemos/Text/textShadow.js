import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BlueIsCool extends Component {
  render() {
    return (
      <View style={{paddingTop:20}}>
        <Text style={{fontSize:32,textShadowColor:'blue',textShadowOffset:{width: 8,height: 8},textShadowRadius:0.1}}>
          Shanghai is the largest city by population in the People's Republic of China (PRC) and the largest city proper by population in the world. It is one of the four province-level municipalities of the PRC, with a total population of over 23 million as of 2010. It is a global city, with influence in commerce, culture, finance, media, fashion, technology, and transport. It is a major financial center and the busiest container port in the world.
        </Text>
      </View>
    );
  }
}