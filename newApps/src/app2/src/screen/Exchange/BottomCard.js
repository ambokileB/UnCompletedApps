import { Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../constants'
import { styles } from './style'
import {AntDesign} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const BottomCard = () => {
  return (
  
    <View style={styles.historyContainer}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:5
      }}>
        
        <MaterialCommunityIcons name="bitcoin" size={45} color="orange" />
        <View style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          gap:5
        }}>
          <Text style={{fontSize:20}}>BTC</Text>
          <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:8
          }}>
            <View style={{backgroundColor:Color.grey,paddingHorizontal:7,padding:3,borderRadius:7}}>
            <Text>1</Text>
            </View>
            <Text>BTC</Text>
            <AntDesign name="caretdown" size={18} color={Color.brightBlue} />
            <Text>1.02%</Text>
          </View>
        </View>
       
        
        </View>
      <View style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        gap:12,
        alignItems:'flex-end'
      }}>
        <Text>Recieved</Text>
        <Text>123000 Tsh</Text>
        </View>
    </View>


  )
}



