import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    let list = [];
    for(let i=1; i <= 1000000;i++ ){
      list.push({
        key:'listItem ' + i
      })
    };
    list.reverse();
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item,index}) => <Text style={styles.item} key="{item.index}">{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})