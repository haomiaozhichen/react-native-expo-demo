import React, { Component } from 'react';
import {
  Text,
  View,
  Switch,
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    }
    render() {
        return (
          <View style={{padding:20}}>
              <Text>
                  Swtich实例
              </Text>
              <Switch
                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                style={{marginBottom:10,marginTop:10}}
                value={this.state.falseSwitchIsOn} />
              <Switch
                onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                value={this.state.trueSwitchIsOn} />
          </View>
        );
    }
}