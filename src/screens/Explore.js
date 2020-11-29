import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'
//https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22q%22%3A%22blackpink%22%2C%22type%22%3A%5B%22video%22%5D%2C%22videoCategoryId%22%3A%2210%22%7D&apix=true
//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=blackpink&type=video&videoCategoryId=10&key==AIzaSyCm01UmtXJgpab2iphhIr_JHA_xX7WoWfo'
const LittleCard= ({name})=>{
   
    
    return(
        <View style={{
            backgroundColor:"#FF0000",
            height:50,
            width:180,
            borderRadius:4,
            marginTop:10
        }}>
            <Text style={{
                textAlign:"center",
                color:"white",
                fontSize:22,
                marginTop:5
            }}>{name}</Text>
        </View>
    )
}

const Explore = ()=>{
    const cardData = useSelector(state =>{
        return state
      })
    return(
        <View style = {{flex:1}}>
            <Header/>
            <ScrollView>
            <View style={{
               flexDirection:"row",
               flexWrap:"wrap",
               justifyContent:"space-around"
           }}>

                <LittleCard name="Gaming"/>
                <LittleCard name="Trending"/>
                <LittleCard name="Music" />
                <LittleCard name="News" />
                <LittleCard name="Movies"/>
                <LittleCard name="Fashion"/> 
            </View>
            <Text style={{
               margin:8,
               fontSize:22,
               borderBottomWidth:1
           }}>Trending Videos</Text>
           <FlatList
                data = {cardData}
                renderItem = {({item})=>{
                return <Card
                    videoId = {item.id.videoId}
                    title = {item.snippet.title}
                    channel= {item.snippet.channelTitle}
                />

                }}
                keyExtractor = {item => item.id.videoId}
      /></ScrollView>
        </View>


    )

}

export default Explore