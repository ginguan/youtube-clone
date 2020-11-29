import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider,useSelector}  from 'react-redux'
import{createStore,combineReducers} from 'redux'

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialIcons,Entypo} from '@expo/vector-icons'; 

import { NavigationContainer,DefaultTheme,DarkTheme ,useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import {reducer} from './src/reducers/reducer'
import {themeReducer} from './src/reducers/themeReducer'

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

//import Header from './components/Header'
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const rooReducer = combineReducers({
  cardData:reducer,
  darkMode: themeReducer
})
const store = createStore(rooReducer)

const RootHome = () =>{
  const {colors} =  useTheme()
  return(
    <Tabs.Navigator 
    tabBarOptions = {{activeTintColor :colors.tabIcon, inactiveTintColor:"grey"}} 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color}) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if (route.name === 'subscribe') {
          iconName = 'subscriptions';
        }

        return <MaterialIcons name={iconName} size={28} color={color}/>;

      },
    })}
    
    >
        <Tabs.Screen name = "home" component = {Home}/>
        <Tabs.Screen name = "explore" component = {Explore}/>
        <Tabs.Screen name = "subscribe" component = {Subscribe}/>
    </Tabs.Navigator>
  )
}
export default App = ()=>{
  return(
     <Provider store={store}>
      <Navigation />
    </Provider>
  )
 
}

export  function  Navigation()  {
  let currentTheme = useSelector(state=>{
    return state.darkMode
  })

  return (
    <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}> 
        <Stack.Navigator headerMode ="none" >
          <Stack.Screen 
            name = "RootHome"
            component = {RootHome}
            />
          <Stack.Screen 
            name = "Search"
            component = {Search}
            />
          <Stack.Screen 
            name = "VideoPlayer"
            component = {VideoPlayer}
            />
        </Stack.Navigator>

      </NavigationContainer>
    

  );
}

