
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    FlatList,
    ScrollView,
    SectionList,
    StyleSheet
} from 'react-native'

const sectonDatas = {
    section1:[
        {title:'映票贡献榜'}
    ],
    section2:[
        {title:'视频'},
        {title:'观看记录'},
    ],
    section3:[
        {title:'收益'},
        {title:'账户'},
        {title:'等级'},
        {title:'实名认证'},
        {title:'邀请好友'}
    ],
    section4:[
        {title:'设置'}
    ],
}

export class MinePage extends Component {
  static navigationOptions = {
    tabBarLabel: '我的'
  }
  render() {
    return (
      <SectionList
          ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#f5f5f9'}}/>}
          SectionSeparatorComponent={()=><View style={{height:10,backgroundColor:'#f5f5f9'}}/>}
          ListHeaderComponent={this._renderHeaderComponent}
          renderItem={this._renderItemComponent}
          contentContainerStyle={{paddingBottom:20}}
          sections={[
              {data: sectonDatas.section1, key:'s1'},
              {data: sectonDatas.section2, key:'s2'},
              {data: sectonDatas.section3, key:'s3'},
              {data: sectonDatas.section4, key:'s4'},
          ]}
      />
    );
  }


  _renderItemComponent = ({item}) => {
      return (
          <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',height:44}}>
              <Image style={{height:20,width:20,marginLeft:15}}/>
              <Text style={{marginLeft:5,color:'#333',fontSize:14}}>{item.title}</Text>
              <Image style={{position:'absolute',top:15,right:15,height:15,width:15}}/>
          </View>
      );
  };

  _renderHeaderComponent= () => {
      return (
        <View style={{backgroundColor:'white'}}>
            <View style={{alignItems:'center',flex:1}}>
                <Text style={{color:'#333',fontSize:16,marginTop:10}}>9999</Text>
                <Text style={{color:'#999',fontSize:14,marginTop:10,marginBottom:15}}>我的关注</Text>
            </View>
            <View style={{height:1,backgroundColor:'#f5f5f9'}}/>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',flex:1}}>
                    <Text style={{color:'#333',fontSize:16,marginTop:10}}>9999</Text>
                    <Text style={{color:'#999',fontSize:14,marginTop:10,marginBottom:15}}>我的关注</Text>
                </View>
                <View style={{width:1,height:15,backgroundColor:'#f5f5f9'}}/>
                <View style={{alignItems:'center',flex:1}}>
                    <Text style={{color:'#333',fontSize:16,marginTop:10}}>9999</Text>
                    <Text style={{color:'#999',fontSize:14,marginTop:10,marginBottom:15}}>我的粉丝</Text>
                </View>
            </View>
            <View style={{height:10,backgroundColor:'#f5f5f9'}}/>
        </View>
      )
  };
}

const styles = StyleSheet.create({
  avatar:{
      marginLeft:15,
      marginTop:15,
      height:60,
      width:60,
      borderRadius:30,
      marginBottom:15
  },
  userName:{
      marginLeft:15,
      fontSize:20,
      color:'#333'
  },
  male:{
      marginLeft:5,
      height:15,
      width:15
  },
})
