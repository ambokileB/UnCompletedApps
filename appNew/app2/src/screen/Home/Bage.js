import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../constants';

export const Bage = () => {
  return (

    <LinearGradient
    colors={[Color.brightBlue1,Color.brightBlue4,Color.brightBlue7,Color.brightBlue6]}
    style={styles.bageContainer}
    >
      <Text style={{color:'white'}}>Your Welcome at cryptoa landing park</Text>
      <Text style={{color:'white'}}>We inssure you that</Text>
      <Text style={{color:'white'}}> Your money get increasingly daily </Text>
    </LinearGradient>
  )
}



