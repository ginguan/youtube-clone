import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions ,TouchableOpacity} from 'react-native';
import { Entypo,MaterialIcons,FontAwesome } from '@expo/vector-icons'; 
import {useNavigation,useTheme} from '@react-navigation/native'

const Card = (props) =>{
    const navigation = useNavigation();
    const {colors}=useTheme();
    const textcolor = colors.iconColor
    return(
        <TouchableOpacity
        onPress={()=>{console.log(props),navigation.navigate("VideoPlayer",{videoId:props.videoId,title:props.title, channel:props.channel,channelId:props.channelId})}}>
        <View style={{marginBottom:10}}>
            <Image 
             source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
             style={{
                 width:"100%",
                 height:240
             }}
            />
            <View style = {{
                flexDirection:"row"
            }}>
                <MaterialIcons style ={{marginLeft: 5,color:textcolor}} name="account-circle" size={35} color="#282828" />
                {/* <Image
                style={{width:60,height:60,borderRadius:60/2}}
                source={{uri:`https://i.ytimg.com/ch/${props.channelId}/hqdefault.jpg`}}
            /> */}
                
                <View style ={{marginLeft: 10}}>

                    <Text 
                    style = {{fontSize:18, fontWeight:"bold", width:Dimensions.get("screen").width-40,color:textcolor}} 
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >
                    {props.title}
                    </Text>
                    <Text style = {{color:textcolor}}>
                        {props.channel} {props.channelId}
                    </Text>
                </View>
                
            </View>

        </View>
        </TouchableOpacity>
    )

}

export default Card;