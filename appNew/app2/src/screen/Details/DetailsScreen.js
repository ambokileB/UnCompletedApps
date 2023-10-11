import {  Text, View ,Image,Dimensions,FlatList} from 'react-native'
import React from 'react'



import Coin from '../../../assets/data/crypto.json'
import { styles } from './Style';
import { CoinDetailHeader } from './components/CoinDetailHeader';
import {AntDesign} from '@expo/vector-icons';

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { CandlestickChart,LineChart } from 'react-native-wagmi-charts'
import { Footer } from './components/Footer';
import { CoinExplanattion } from './components/CoinExplanattion';


export const DetailsScreen = ({navigation}) => {
    const {
        image:{small},
        name,
        symbol,
        prices,
        market_data:{
          market_cap_rank,
          current_price,
          price_change_percentage_24h
        }
    } =Coin;


    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943':'#16c784';





    const data = [
      {
        timestamp: 1625945400000,
        open: 33575.25,
        high: 33600.52,
        low: 33475.12,
        close: 33520.11,
      },
      {
        timestamp: 1625946300000,
        open: 33545.25,
        high: 33560.52,
        low: 33510.12,
        close: 33520.11,
      },
      {
        timestamp: 1625947200000,
        open: 33510.25,
        high: 33515.52,
        low: 33250.12,
        close: 33250.11,
      },
      {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33430.52,
        low: 33215.12,
        close: 33420.11,
      },
      
      {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33430.52,
        low: 33215.12,
        close: 33420.11,
      },
      {
        timestamp: 1625947200000,
        open: 33410.25,
        high: 33415.52,
        low: 33150.12,
        close: 33150.11,
      },
      {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33330.52,
        low: 33215.12,
        close: 33320.11,
      },


      
      
      
      
      
      {
        timestamp: 1625946300000,
        open: 33545.25,
        high: 33560.52,
        low: 33510.12,
        close: 33520.11,
      },
      {
        timestamp: 1625947200000,
        open: 33510.25,
        high: 33515.52,
        low: 33250.12,
        close: 33250.11,
      },
      
      {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33430.52,
        low: 33215.12,
        close: 33420.11,
      },
      {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33430.52,
        low: 33215.12,
        close: 33420.11,
      },
      {
        timestamp: 1625945400000,
        open: 33575.25,
        high: 33600.52,
        low: 33475.12,
        close: 33520.11,
      },
      
      {
        timestamp: 1625945400000,
        open: 33575.25,
        high: 33600.52,
        low: 33475.12,
        close: 33520.11,
      },
      {
        timestamp: 1625946300000,
        open: 33545.25,
        high: 33560.52,
        low: 33510.12,
        close: 33520.11,
      },
      {
        timestamp: 1625947200000,
        open: 33510.25,
        high: 33515.52,
        low: 33250.12,
        close: 33250.11,
      },
      
      {
        timestamp: 1625947200000,
        open: 33410.25,
        high: 33415.52,
        low: 33150.12,
        close: 33150.11,
      },
      {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33330.52,
        low: 33215.12,
        close: 33320.11,
      },
      {
        timestamp: 1625945400000,
        open: 33575.25,
        high: 33600.52,
        low: 33475.12,
        close: 33520.11,
      },
      {
        timestamp: 1625946300000,
        open: 33545.25,
        high: 33560.52,
        low: 33510.12,
        close: 33520.11,
      },
      {
        timestamp: 1625947200000,
        open: 33510.25,
        high: 33515.52,
        low: 33250.12,
        close: 33250.11,
      },
    
    ];

    const ViewComponent = ()=>{
      return(
        <View style={{flexDirection:'column',gap:1,alignItems:'center',justifyContents:'center'}}>
          <View  style={{flexDirection:'row',gap:12}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContents:'center'}}>
              <Text>Open: </Text>
              <CandlestickChart.PriceText type="open" />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContents:'center'}}>
              <Text>High :</Text>
              <CandlestickChart.PriceText type="high" />
            </View>
          </View>
    
            <View  style={{flexDirection:'row',alignItems:'center',justifyContents:'center',gap:12}}>
    
    
            <View style={{flexDirection:'row',alignItems:'center',justifyContents:'center'}}>
              <Text>low : </Text>
              <CandlestickChart.PriceText type="low" />
            </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContents:'center'}}>
                <Text>close :</Text>
                <CandlestickChart.PriceText type="close" />
              </View>
            </View>
    </View>
      )

    }


    const mydetail=[
      {
          id:1,
          descriptions:"hello"
      },
      {
          id:2,
          descriptions:"hello"
      },
      {
          id:3,
          descriptions:"hello"
      }


  ]

  return (
    <View style={{
      paddingVertical:12
    }}>
     

   
    {/* <CoinExplanattion/> */}
    <FlatList
            showsVerticalScrollIndicator={false}

          data={mydetail}
          renderItem={({item})=>(
              <View style={styles.container_Expl}>
            <Text>CoinExplanattion</Text>
            <Text>example : Bitcoin have become more enegetic in this subsequency month's so for this simple analysis you can be able to determine what next behind bitcoin</Text>
          </View>
          )}

          ListHeaderComponent={
            <>
        <CoinDetailHeader
        navigation={navigation}
        small={small}
        name={name}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.current_price}>${current_price.usd}.09</Text>
        </View>
        <View style={{backgroundColor:percentageColor,paddingHorizontal:5,paddingVertical:8,flexDirection:'row',gap:3,borderRadius:8}}>
              <AntDesign
                          name={price_change_percentage_24h < 0 ? 'caretdown':'caretup'} 
                          size={18} 
                          color={'white'} />
              <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>


      <GestureHandlerRootView>

          <CandlestickChart.Provider data={data} >
            <CandlestickChart >
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair>
                <CandlestickChart.Tooltip />
              </CandlestickChart.Crosshair>
            </CandlestickChart>
            <ViewComponent/>
            <CandlestickChart.DatetimeText />
          </CandlestickChart.Provider>
          </GestureHandlerRootView>


              <Footer/>


            </>
          }

    />
    </View>
  )
}




