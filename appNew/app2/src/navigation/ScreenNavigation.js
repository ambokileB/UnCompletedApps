import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from '../screen'
import { DetailsScreen } from '../screen/Details/DetailsScreen'




const Stack = createNativeStackNavigator()

export const ScreenNavigation = ({navigation}) => {
  return (

        <Stack.Navigator screenOptions={{
          headerMode: 'screen',
          
        }}>
            <Stack.Screen 
            options={{ headerShown: false }}
            name='Home'
            component={HomeScreen}/>
            <Stack.Screen 
            options={{ headerShown: false }}
                name='detail'
                component={DetailsScreen}
                />
        </Stack.Navigator>
  
  )
}

export default ScreenNavigation

const styles = StyleSheet.create({})