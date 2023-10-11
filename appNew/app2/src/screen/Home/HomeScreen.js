import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
// import { BodyComponent } from '../../component'
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json'
import { StatusBar } from 'expo-status-bar'
import { Color } from '../../constants'
import Card from './Card'
import { Header } from './Header'
import { Bage } from './Bage'


export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.white}/>
      <FlatList

        showsVerticalScrollIndicator={false}
        numColumns={2}
          data={cryptocurrencies}
          renderItem={({item})=><Card marketCoin={item} navigation={navigation}/>}
          ListHeaderComponent={
            <>
            {/* <Bage/> */}
            <Header/>
            
            </>
          }

      />
        
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        // paddingVertical:20
        
    }
})