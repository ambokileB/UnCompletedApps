import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Color } from '../constants'
import { Card } from './Card'


export const BodyComponent = () => {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.white,
        paddingVertical:5,
        // paddingHorizontal:15
    },

})
