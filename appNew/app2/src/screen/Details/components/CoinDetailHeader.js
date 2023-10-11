import { Image, Pressable, Text, View } from 'react-native'
import { Ionicons ,EvilIcons} from '@expo/vector-icons';
import React from 'react'
import { styles } from '../Style'

export const CoinDetailHeader = (props) => {

    const {
        navigation,
        small,
        name,
        symbol,
        market_cap_rank
    } = props;


  return (
    <Pressable style={styles.headerContainer} onPress={()=>navigation.goBack()}>

    <Ionicons name="chevron-back-sharp" size={26} color='black' />
    <View style={styles.CoinHeading}>
    <Image
      source={{uri:small}}
      style={{
          width:30,
          height:30
      }}
      />
      <Text>{symbol.toUpperCase()}</Text>
      <View style={styles.rankContainer}>
        <Text>#{market_cap_rank}</Text>
      </View>
    </View>
      <EvilIcons name="user" size={26} color='black' />

  </Pressable>
  )
}



