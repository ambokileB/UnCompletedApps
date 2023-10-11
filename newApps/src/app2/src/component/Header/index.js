import { View, Text,StyleSheet,Dimensions,Image } from 'react-native'
import React from 'react'
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { Color } from '../../constants';
import { Bage } from '../../screen/Home/Bage';

export const HeaderInfo = () => {
    const {height,width} = Dimensions.get('screen');
  return (
    <View style={styles.container}>

       <View style={styles.uppertoolbar}>
            <View style={styles.nameContainer}>
                <Text style={styles.helloText}>Welcome......</Text>
                <Text style={styles.nameText}>Roger</Text>
            </View>
           
            <View style={styles.userContainer}>
                <View style={styles.notification}>
                    <Ionicons name="ios-notifications-outline" size={24} color="black" />
                </View>
                
                
            </View>
        </View>
        <Bage/>

       <View style={styles.lowertoolbar}>
                <Text style={styles.balanceText}>Actual Balance</Text>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}><Text style={styles.usd}>$</Text>3,372.10</Text>
                    <Text style={styles.percentText}>+12.1%</Text>
                </View>
       </View>
    </View>
  )
}






