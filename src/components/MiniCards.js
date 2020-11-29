import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Dimensions ,TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from '@react-navigation/native'

const MiniCard =(props)=>{
    const navigation = useNavigation();
    const {colors} =useTheme();
    const textcolor = colors.iconColor
    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate("VideoPlayer",{videoId:props.videoId,title:props.title,channel:props.channel,channelId:props.channelId})}>
  
        <View style = {{flexDirection:"row" ,margin: 10, marginBottom:0}} >
            <Image 
            source ={{uri:`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
            style = {{
                width:"50%",
                height:110,
                opacity:0.8
             }}
             />
            <View style ={{
                paddingLeft:7
            }}>
                {/* https://developers.google.com/youtube/v3/docs/search/list */}

            <Text 
                    style = {{fontSize:17, fontWeight:"bold", marginTop:15,width:Dimensions.get("screen").width/2-10,color:textcolor}} 
                    ellipsizeMode="tail"
                    numberOfLines={3}
                    >
                    {unescape(props.title)}
                    </Text>
                    <Text style = {{fontSize:15, marginTop:8, color:textcolor}}>
                    {props.channel} 
                    </Text>

            </View>
        </View>
        </TouchableOpacity>

    )

}
export default MiniCard