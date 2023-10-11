import { StyleSheet } from "react-native";
import { Color } from "../../constants";



export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:Color.grey
    },
    topContainer:{
        display:'flex',
        flex:1/3,
        backgroundColor:Color.grey,
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:'space-between'

    },

    titleContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    p2pText:{
        fontSize:17,
        fontWeight:'bold',
        color:Color.grey3
    },
    priceText:{
        fontSize:17,
        fontWeight:'bold',
        color:Color.grey3
    },
    symbolIcon:{
        display:'flex',
        padding:8,
        
        backgroundColor:Color.grey,
        borderRadius:33
    },
    symbolPriceText:{
        fontSize:23,
        fontWeight:'bold',

    },
    equivalentText:{
        fontSize:18,
        fontWeight:'bold',
        color:Color.grey2,
    },
    sendContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    sendBtn:{
        display:'flex',
        backgroundColor:Color.brightBlue,
        padding:1,
        borderRadius:25,
        width:45,
        height:45,
        alignItems:'center',
        justifyContent:'center'

    },
    receiveBtn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    receiveBtn:{
        display:'flex',
        backgroundColor:Color.brightBlue,
        padding:1,
        borderRadius:25,
        width:45,
        height:45,
        alignItems:'center',
        justifyContent:'center'

    },
    swapContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    swapBtn:{
        display:'flex',
        backgroundColor:Color.brightBlue,
        padding:1,
        borderRadius:25,
        width:45,
        height:45,
        alignItems:'center',
        justifyContent:'center'

    },
    bottomContainer:{
        display:'flex',
        flex:2/3,
        backgroundColor:Color.white,
        paddingHorizontal:30,
        paddingVertical:10,
        paddingTop:30,
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
        gap:10

    },
    historyContainer:{
        backgroundColor:'#eeeeee',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:8,
        paddingHorizontal:5,
        paddingVertical:5,
        alignItems:'center',
        borderBottomWidth:StyleSheet.hairlineWidth
    }

})