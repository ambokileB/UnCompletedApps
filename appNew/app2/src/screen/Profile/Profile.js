import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { StatusBar } from 'expo-status-bar'
import { Color, profileAvatarIcon } from '../../constants'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.grey}/>
      <View style={styles.infocontainer}>
        
        <View style={styles.header}>
          <View style={styles.userPhoto}>
            <Image
              source={profileAvatarIcon}
              resizeMode='contain'
              style={{
                height:30,
                width:30
              }}

            />

          </View>
          <Text style={styles.walletText}> My Wallet</Text>
          <View style={styles.notificationIcon}>
            <Ionicons name="ios-notifications-outline" size={24} color="black" />
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Available balance</Text>
          <Text style={styles.balanceAccount}>$ 18 420.81</Text>
        </View>

        <View style={styles.transanctionBtn}>
          <TouchableOpacity style={styles.payBtn}>
            <Feather name="arrow-up-right" size={24} color="white" />
              <Text style={styles.payText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.requestBtn}>
            <Feather name="arrow-down-left" size={24} color="black" />
            <Text style={styles.requestText}>Request</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.myCardContainer}>
          <Text style={styles.myCardText}>My Cards</Text>
          <TouchableOpacity style={styles.plusContainer}> 
            <Entypo name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>


        


     
        <LinearGradient
        colors={[Color.brightBlue1,Color.brightBlue4,Color.brightBlue7,Color.brightBlue6]}
        style={styles.card}
        >
        <View style={styles.cardTypeContainer}>
          <View style={styles.roundContainer}>
            <View style={styles.firstRound}></View>
            <View style={styles.secondRound}></View>
          </View>
          <Text style={styles.cardTypeText}>Platinum</Text>
        </View>
        <View style={styles.cardNameAndCardNumberContainer}>

          <Text style={styles.cardName}>Rodger James malemi</Text>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumberText}>....</Text>
            <Text style={styles.cardNumberText}>....</Text>
            <Text style={styles.cardNumberText}>....</Text>
            <Text style={styles.cardNumberText}>4321</Text>
          </View>
        </View>

      </LinearGradient>



      </View>
    </View>
  )
}

