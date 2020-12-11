import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator } from 'react-native';
import { Ionicons, FontAwesome  } from '@expo/vector-icons'; 
import Constant from 'expo-constants'
import MiniCard from "../components/MiniCards"
import {useSelector,useDispatch} from 'react-redux'
import {useNavigation,useTheme} from '@react-navigation/native'
//

//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=blackpink&type=video&videoCategoryId=10&key==AIzaSyCm01UmtXJgpab2iphhIr_JHA_xX7WoWfo'

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyCm01UmtXJgpab2iphhIr_JHA_xX7WoWfo
const Search = ({navigation}) =>{
    const {colors} =useTheme();
    const barcolor = colors.headerColor
    const iconcolor = colors.iconColor

    const [value,setValue] = useState("")
    //const [miniCardData, setMiniCard] = useState([])
    const dispatch = useDispatch()
    const miniCardData = useSelector(state =>{
        return state.cardData
    })
    const [loading,setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyCm01UmtXJgpab2iphhIr_JHA_xX7WoWfo`)
        .then(res =>res.json())
        .then(data =>{
            //console.log(data)
            setLoading(false)
            dispatch({type:"add",payload:data.items})
            //setMiniCard(data.items)
        })
    }
    return (
        <View style = {{
            marginTop: Constant.statusBarHeight,
            flex:1
            }}>
            <View style = {{
                flexDirection:"row", 
                padding :8, 
                justifyContent:"space-around",
                elevation:5,
                backgroundColor:barcolor,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.1,
        
                }}>
                <Ionicons name="md-arrow-round-back" size={24} color ={iconcolor}
                onPress = {() => navigation.goBack()} 
                />
                <TextInput
                    style ={{ 
                        marginLeft: 5,
                        width: "70%",
                        backgroundColor:"#e6e6e6",
                    }} 
                    value = {value}
                    onChangeText = {(text) => setValue(text) }
                />
                <FontAwesome style ={{marginLeft: 5,color:iconcolor}} name="search" size={24} color="#282828" onPress ={()=>fetchData()}/>
                {/* <Ionicons style ={{marginLeft: 10}} name="md-options" size={24} color="#282828" /> */}
            </View>
            {loading ? <ActivityIndicator style = {{marginTop:10}} size = "large" color = "#FF0000"/>:null}
            <FlatList
            data= {miniCardData}
            renderItem = {({item})=>{
                return <MiniCard
                    videoId = {item.id.videoId}
                    title = {item.snippet.title}
                    channel = {item.snippet.channelTitle}
                    channelId = {item.snippet.channelId}
                    
                />
            }}
            keyExtractor = {item=> item.id.videoId}
            />
            
        </View>
    )

}

export default Search