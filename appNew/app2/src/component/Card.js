import { StyleSheet, Text, TouchableOpacity, View,FlatList, Dimensions } from 'react-native'
import React,{useState} from 'react'
import { Color, Data } from '../constants'
import { HeaderInfo } from './Header';
// cryptocurrencies

const {height,width}=Dimensions.get('window');

export const Card = () => {

 


    const Item = ({item,onPress,backgroundColor,textColor})=>(
        <TouchableOpacity onPress={onPress} style={[styles.item,{backgroundColor}]}>
            <Text style={[styles.name,{color:textColor}]}>{item.name}</Text>

        </TouchableOpacity>
    )

    const [selectedId,setSelectedId] = useState()
    const renderItem = ({item})=>{
        const backgroundColor = item.id === selectedId ? Color.grey1 : Color.white1 ;

        const color = item.id === selectedId ? 'white':'black';

        return(
            <Item
                item={item}
                onPress={()=>setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
                />
        )
    }

    const ListHeader = ()=>(
        <>
        <HeaderInfo/>
    

       <View style={{
        display:'flex',
        flexDirection:'row',
        
        paddingHorizontal:12
        

       }}>
        <Text style={styles.trendingText}>Trending Assests</Text>
        <TouchableOpacity style={{
            marginLeft:'auto'
        }}>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
        
        </>
    )
  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={Data}
      renderItem={renderItem}
      keyExtractor={item =>item.id}
      extraData={selectedId}
      ListHeaderComponent={<ListHeader/>}


    />
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        // backgroundColor:Color.defaultPrimary,
        justifyContent:'space-around',
        borderRadius:12
    },
    item:{
        flex:1,
        marginHorizontal:10,
        height:height/3.2,
        marginVertical:5,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:5


    },
    heading:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
        marginHorizontal:5,
        backgroundColor:'red'

      },
      trendingText:{
        fontSize:16,
        fontWeight:'bold'
      }
})