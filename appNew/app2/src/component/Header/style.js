import { StyleSheet } from "react-native"
import { Color } from "../../constants"

 export const styles=StyleSheet.create({
    container:{
        flex:1/5.2,
        display:'flex',
        flexDirection:'column',
        backgroundColor: Color.white,
        // padding:9,
        justifyContent:'space-between'
    },
    uppertoolbar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Color.white,
        paddingHorizontal:8,
        
    },
    nameContainer:{
        display:'flex',
        padding:3,
        backgroundColor: Color.white,
    },
    helloText:{
        fontSize:16,
        fontWeight:'bold',
        color:Color.grey2,
        letterSpacing:2,
        fontStyle:'italic',
        
    },
    nameText:{
        fontSize:23,
        fontWeight:'bold'
    },
    userContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        gap:5,

    },
    notification:{
        backgroundColor:'#eeeeee',
        borderRadius:12,
        padding:5,
    },
    userIcon:{
        padding:5,
        
        backgroundColor:Color.grey,
        borderRadius:12
    },
    lowertoolbar:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:Color.white,
        justifyContent:'flex-start',
        paddingHorizontal:8

    },
    balanceText:{
        fontSize:17,
        color:Color.grey1,
        letterSpacing:1,
    },
    amountContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        gap:15,
        alignItems:'center',
        paddingBottom:1
        
    },
    amountText:{
        fontSize:30,
        fontWeight:'bold',
        letterSpacing:2
    },
    usd:{
        fontSize:15,
    },
    percentText:{
        fontSize:16,
        color:Color.green,
        fontWeight:'bold'
    }
    
})
