import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity, Pressable, Alert } from 'react-native'
import React from 'react'
import { Color } from '../../constants';
import {AntDesign} from '@expo/vector-icons';

const {height,width}=Dimensions.get('window');


const Card = ({marketCoin,navigation}) => {
    // console.log("markets:  ",marketCoin)

    const {name,
        image,
        market_cap_rank,
        market_cap_change_percentage_24h,
        symbol,
        market_cap,
        current_price

    } = marketCoin;

    const normalizeMarketCap = (market_cap)=>{
        if (market_cap > 1_000_000_000_000) {
            return `${Math.floor(market_cap/1_000_000_000_000)} T`;
            
        }else if (market_cap > 1_000_000_000) {
            return `${Math.floor(market_cap/1_000_000_000)} B`;
            
        } else if (market_cap > 1_000_000){ 
            return `${Math.floor(market_cap/1_000_000)} M`;
            
        }else{
            return `${Math.floor(market_cap/1_000)} `;
        }

    }
const beutifulName=(name)=>{
    if (name.length > 7) {
        newName = name.slice(0,7)+" ....";
        return newName;
        
    }else{
        return name;
    }

}


    const percentageColor = market_cap_change_percentage_24h < 0 ? '#ea3943':'#16c784'
  return (
    <Pressable
        onPress={()=>navigation.navigate('detail')}
        // onLongPress={()=>Alert.alert("you have holding for a minute")}
     style={styles.container} >
      <View style={styles.upper}>
        <View>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:5,
                alignItems:'center',
                justifyContent:'space-between'
            }}>
            <Image
            source={{
                uri:image
            }}
            style={{
                height:30,
                width:30
            }}/>
            <Text style={{
                fontWeight:'bold',
                fontSize:15
            }}>{symbol.toUpperCase()}</Text>
            </View>
        <Text style={styles.symbolText}>{beutifulName(name)}</Text>
        </View>


        <View style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'flex-end'
        }}>
            <View style={{
                padding:4,
                paddingHorizontal:5,
                backgroundColor:Color.grey,
                display:'flex',
                alignItems:'flex-end',
                borderRadius:5
            }}>
                <Text style={{
                    display:'flex',
                    textAlign:'right',
                    color:Color.grey1,
                    fontSize:15,
                    fontWeight:'bold'
                }}>{market_cap_rank}</Text>
            </View>

                <View style={{
                    display:'flex',
                    flexDirection:'row'
                }}>
                    <AntDesign
                     name={market_cap_change_percentage_24h < 0 ? 'caretdown':'caretup'} 
                     size={18} color={percentageColor} />
                    <Text style={{color: percentageColor}}>{market_cap_change_percentage_24h.toFixed(2)}%</Text>
                </View>
        </View>
      </View>


      <View style={styles.middle}>
        <Text>charts</Text>
      </View>
      <View style={styles.lower}>
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        gap:12,
                    }}>
                    <Text style={{fontSize:16}}>MCap:</Text>
                    <Text style={{fontSize:16}}>{normalizeMarketCap(market_cap)}</Text>
                    </View>
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        gap:12,
                        alignItems:'flex-end'
                    }}>
                        <Text style={{fontSize:16}}>Price:</Text>
                    <Text style={{fontSize:16}}> {current_price}</Text>
                    </View>
        
      </View>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        width:width/2,
        height:height/3,
        marginVertical:8,
        marginHorizontal:8,
        backgroundColor:'white',
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:12,
        paddingHorizontal:8,
        paddingVertical:8
    },
    upper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'


    },
    symbolText:{
        textTransform:'uppercase',
        fontSize:13,
        fontWeight:'bold'

    },
    middle:{
        display:'flex',
        // backgroundColor:Color.grey,
        height:height/6,
    },
    lower:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'baseline'
    }


})