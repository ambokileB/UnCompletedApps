

import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { HeaderInfo } from '../../component'
import { Bage } from './Bage'

export const Header = () => {
  return (
    <View>
      
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
    </View>
  )
}


const styles = StyleSheet.create({})
