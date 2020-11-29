import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import {useNavigation,useTheme} from '@react-navigation/native'
import Header from '../components/Header'

const VideoPlayer = ({route})=>{
    const {colors} =useTheme();
    const barcolor = colors.headerColor
    const iconcolor = colors.iconColor
    const {videoId,title,channel} = route.params
   return(

       <View style={{
           flex:1,
        marginTop:Constant.statusBarHeight
        }}>


           <View style={{
               marginTop:180,
               width:"100%",
               height:245
           }}>
              <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
               source={{uri:`https://www.youtube.com/embed/${videoId}`}}
              />

           </View>
           <Text style={{
               fontSize:20,
               width:Dimensions.get("screen").width - 50,
               margin:9,
               color:iconcolor,
           }}
                numberOfLines={2}
                ellipsizeMode="tail"
           >
             {title} 
           </Text>
           <Text style={{
               fontSize:18,
               fontWeight:"bold",
               width:Dimensions.get("screen").width - 50,
               margin:9,
               color:iconcolor,
           }}
                
           >
             {channel} 
           </Text>
           <View
             style={{borderBottomWidth:1}}
           />
       </View>
   )
}

export default VideoPlayer
