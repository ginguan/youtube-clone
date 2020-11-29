import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo,MaterialIcons,FontAwesome } from '@expo/vector-icons'; 
import Constant from 'expo-constants'
import { useNavigation, useTheme } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'


//YouTube page Header
export default function Header() {
  const navigation = useNavigation()
  const currentTheme = useSelector(state=>{
    return state.darkMode
  })
  const dispatch = useDispatch()
  const {colors}= useTheme()
  const mycolor = colors.iconColor
  return (
    <View  style = {{
        marginTop: Constant.statusBarHeight,
        height:40,
        backgroundColor: colors.headerColor,
        flexDirection:"row",
        elevation:4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,

        }}>
      <View style = {{flexDirection:"row"}} >
            <Entypo name="youtube" size={24} color="#FF0000" style = {{
                marginLeft: 13
            }}/>
            <Text style = {{
                fontSize:22,
                color:mycolor,
                marginLeft: 5,
                fontWeight:"bold"
            }}>YouTube</Text>
      </View>
      <View style = {{
          flexDirection:"row",
          marginLeft: 184
          }} >
        <FontAwesome  name="video-camera" size={24} color= {mycolor}/>
        <FontAwesome style ={{marginLeft: 10}} name="search" size={24} color={mycolor}
        onPress = {() => navigation.navigate("Search")}
        />
        <MaterialIcons style ={{marginLeft: 10}} name="account-circle" size={24} color={mycolor} 
         onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})}
        />


      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

