import { StyleSheet } from "react-native";
import { Color } from "../../constants";

export const styles = StyleSheet.create({
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:7
    },
    CoinHeading:{
        flexDirection:'row',
        alignItems:'center',
        display:'flex',
        gap:7
    },
    rankContainer:{
        padding:4,
        backgroundColor:Color.grey,
        borderRadius:7,
        
    },
    name:{
        fontSize:15
    },
    current_price:{
        fontSize:30,
        fontWeight:'600'
    },
    priceContainer:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    priceChange:{
        fontSize:17,
        fontWeight:'500'
    },
    footerContainer:{
        marginHorizontal:7,
        // backgroundColor:Color.grey,
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:12,
        borderRadius:12,

    },
    inputText:{
        width:100,
        padding:12,
        // backgroundColor:Color.grey,
        // borderRadius:12
    },
    button:{
        padding:12,
        backgroundColor:'#16c784',
        width:100,
        alignItems:'center',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button1:{
        padding:12,
        backgroundColor:'#ea3943',
        width:100,
        alignItems:'center',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container_Expl:{
        marginHorizontal:15,
        marginBottom:18,
        marginTop:10
    }
  
})