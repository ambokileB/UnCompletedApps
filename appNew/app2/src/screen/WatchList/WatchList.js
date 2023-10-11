import {  Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { StatusBar } from 'expo-status-bar'
import { Color } from '../../constants'

export const WatchList = () => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Color.white}/>
      <Text>No any Watched assets here....</Text>
    </View>
  )
}



