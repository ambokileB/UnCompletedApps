import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native'


import { EmptyScreen, Exchange, HomeScreen, Profile, WatchList } from '../screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {ScreenNavigation} from './ScreenNavigation';




const Tab = createBottomTabNavigator();

export const Bottomnavigator = ({navigation}) => {


  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth(){
    let width = Dimensions.get('window').width;

    width= width - 80;

    return width/5;
  }
  return (
    <NavigationContainer>
    
        <Tab.Navigator 
            screenOptions={{
              headerShown:false,
              tabBarShowLabel:false,
              tabBarActiveTintColor: Color.green1,
              tabBarInactiveTintColor:'#aaaaaa',
              tabBarStyle: { 
                position: 'absolute' ,
                bottom:20,
                marginHorizontal:18,
                backgroundColor:Color.white,
                borderRadius:18,
                height:60,
                paddingHorizontal:20,
                borderBottomColor:Color.brightBlue1,
                borderWidth:1,
                shadowColor:'#000',
                shadowOpacity:0.06,
                shadowOffset:{
                  height:10,
                  width:10
                }
              },
            }}
          
        >
            <Tab.Screen
             name='Home1' 
             component={ScreenNavigation}
             navigation={navigation}
             options={{
              tabBarIcon:({focused})=>( 
                <View style={{
                  position:'absolute',
                  // top:'50%'
                }}>
                    <FontAwesome5 name="home" size={24} color={focused ? 'black': 'grey'}>

                    </FontAwesome5>
                </View>
              )
             }}

             listeners={({navigation,route})=>({
              tabPress: e =>{
               Animated.spring(tabOffsetValue,{
                toValue:0,
                useNativeDriver:true,
               }).start()
              }
            })}
             />
            <Tab.Screen name='Exchange' component={Exchange} options={{
              tabBarIcon:({focused})=>(
                <View style={{
                  position:'absolute',
                  // top:'50%'
                }}>
                  <FontAwesome name="exchange" size={24} color={focused ? 'black': 'grey'}>

                  </FontAwesome>
                </View>
              )
            }}
            listeners={({navigation,route})=>({
              tabPress: e =>{
               Animated.spring(tabOffsetValue,{
                toValue:getWidth(),
                useNativeDriver:true,
               }).start()
              }
            })}
            />
            <Tab.Screen name={'ActionButton'} component={EmptyScreen} options={{
              tabBarIcon:({focused})=>(
                <TouchableOpacity style={{
                  marginBottom:30,
                  padding:2,
                  height:50,
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  width:50,
                  backgroundColor:Color.brightBlue4,
                  borderRadius:23
                }}>
                  <Octicons name="plus" size={24} color={focused ? 'black': 'white'} />

                </TouchableOpacity>
              )
            }}/>
            <Tab.Screen name='WatchList' component={WatchList} options={{
              tabBarIcon:({focused})=>(
                <View style={{
                  position:'absolute',
                  // top:'50%'
                }}>
                  <Ionicons name="list-sharp" size={24} color={focused ? 'black': 'grey'}/>
                </View>
              )
            }}  listeners={({navigation,route})=>({
              tabPress: e =>{
               Animated.spring(tabOffsetValue,{
                toValue:getWidth() * 3,
                useNativeDriver:true,
               }).start()
              }
            })}/>
            <Tab.Screen name='Profile' component={Profile} options={{
              tabBarIcon:({focused})=>(
                <View style={{
                  position:'absolute',
                  // top:'50%'
                }}>
                 <MaterialCommunityIcons name="account-tie-hat" size={24} color={focused ? 'black': 'grey'} />
                </View>
              )
            }}
            listeners={({navigation,route})=>({
              tabPress: e =>{
               Animated.spring(tabOffsetValue,{
                toValue:getWidth() * 4,
                useNativeDriver:true,
               }).start()
              }
            })}
            />
        </Tab.Navigator>
        <Animated.View style={{
          height:2,
          width:getWidth()-20,
          backgroundColor:Color.defaultPrimary,
          position:'absolute',
          bottom:80,
          left:53,
          transform:[
            {translateX:tabOffsetValue}
          ]
        }}>

        </Animated.View>
        
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({})