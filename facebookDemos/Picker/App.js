import React, { Component } from 'react';
import { View, Picker } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { language: 'js' };//和 Picker.Item 的value相等
    }
    render() {
        return (
          <View style={{padding:25}}>
              <View style={{ height: 50, width: 200 , borderColor:'grey',borderWidth:2}}>
                  <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                      <Picker.Item label="Java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                  </Picker>
              </View>
          </View>
        );
    }
}