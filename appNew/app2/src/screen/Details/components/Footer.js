import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../Style'
import {AntDesign} from '@expo/vector-icons';

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
        
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:15,fontWeight:'600',color:'white',letterSpacing:4}}>BUY</Text>
                <AntDesign
                        name='caretup'
                          size={18} 
                          color={'white'} />
            </TouchableOpacity>
            <TextInput
                keyboardType='phone-pad'
                placeholder='volume '

                style={styles.inputText}

            />
            <TouchableOpacity style={styles.button1}>
                <Text style={{fontSize:15,fontWeight:'600',color:'white',letterSpacing:4}}>SELL</Text>
                <AntDesign
                        name='caretdown'
                          size={18} 
                          color={'white'} />
            </TouchableOpacity>
        
    </View>
  )
}
