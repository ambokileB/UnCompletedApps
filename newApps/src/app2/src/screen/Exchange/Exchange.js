import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { StatusBar } from 'expo-status-bar'
import { Color } from '../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { BottomCard } from './BottomCard'





export const Exchange = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.grey}/>

      <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.p2pText}>P2P</Text>
            <View style={{
              display:'flex',
              flexDirection:'row',
              gap:10
              }}>
              <Text style={styles.priceText}>$3,755.64</Text>
              <Text style={styles.priceText}>+0.76%</Text>
            </View>
          </View>

          <View style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        
            gap:6
            }}>
            <View style={styles.symbolIcon}>
            <MaterialCommunityIcons name="ethereum" size={29} color="black" />
            
            </View>
            <Text style={styles.symbolPriceText}>0.55203226 ETH</Text>
            <Text style={styles.equivalentText}>== $2,073.23</Text>
          </View>

          <View style={{
            display:'flex',
            flexDirection:'row',
           
            gap:30,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <View style={styles.sendContainer}>
                <TouchableOpacity style={styles.sendBtn}>
                <MaterialCommunityIcons name="tray-arrow-up" size={24} color="white" />
                </TouchableOpacity>
                  <Text style={styles.sendText}>Send</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.receiveBtn}>
              <MaterialCommunityIcons name="tray-arrow-down" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.receiveText}>Receive</Text>
            </View>
            <View style={styles.swapContainer}>
              <TouchableOpacity style={styles.swapBtn}>
              <Fontisto name="arrow-swap" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.swapText}>Swap</Text>
            </View>
          </View>

      </View>
      <View style={styles.bottomContainer}>
      <BottomCard/>
      <BottomCard/>
      <BottomCard/>
    


      </View>
      
     


    


      

    </View>
  )
}



