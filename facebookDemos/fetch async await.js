import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    this._fetchWebData();
  }
  
  async _fetchWebData(){
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      //console.log('response:',response);
      let responseJson = await response.json();
      console.log('responseJson:',responseJson);
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      });
    } catch (error) {
      console.error(error);
    }
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>电影名：{item.title},  年代：{item.releaseYear}</Text>}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}