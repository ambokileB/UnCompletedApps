import { Dimensions, StyleSheet } from "react-native";
import {Color} from '../../constants'




const {height,width} = Dimensions.get('window');

export const styles=StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        backgroundColor:Color.grey,
        
    },
    infocontainer:{
        display:'flex',
        flex:1/3,
        backgroundColor:Color.grey,
        paddingVertical:17,
        paddingHorizontal:25,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    header:{
        display:'flex',
        backgroundColor:Color.grey,
        padding:2,
        flex:1/2.9,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        justifyContent:'space-between'


    },
    userPhoto:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    walletText:{
        fontSize:24,
        color:Color.white,
        fontWeight:'bold',
        textTransform:"uppercase",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'


    },
    notificationIcon:{
        display:'flex',
        padding:2,
        
        

    },
    balanceContainer:{
        display:'flex',
        flexDirection:'column',
        // backgroundColor:'red',
        paddingHorizontal:12,
        paddingVertical:2,
        gap:5
    },
    balanceText:{
        fontSize:16,
        // letterSpacing:1,
        color:Color.white
    },
    balanceAccount:{
        fontSize:30,
        fontWeight:'bold',
        color:Color.white,
        letterSpacing:2.5

    },
    transanctionBtn:{
        display:'flex',
        paddingHorizontal:0,
        paddingVertical:1,
        // backgroundColor:'orange',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    payBtn:{
        display:'flex',
        width:width/2.4,
        height:height/17,
        backgroundColor:Color.blue1,
        paddingHorizontal:23,
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:16,
    },
    payText:{
        fontSize:16,
        color:Color.white
    },
    requestBtn:{
        display:'flex',
        width:width/2.4,
        height:height/17,
        backgroundColor:Color.white,
        paddingHorizontal:23,
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:16,

    },
    requestText:{
        fontSize:16,

    },

// belo container


    cardsContainer:{
        display:'flex',
        flex:3/4,
        backgroundColor:Color.white,
        borderTopEndRadius:40,
        borderTopStartRadius:40,
        paddingHorizontal:33,
        paddingTop:12,
        flexDirection:'column',
    },
    myCardContainer:{
        display:'flex',
        
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:0,
        top:23

    },
    myCardText:{
        fontSize:20,
        fontWeight:'bold'

    },
    plusContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:Color.blue2,
        width:40,
        borderRadius:15,
        

    },
    card:{
        display:'flex',
        flexDirection:'column',
        height:height/4,
        borderRadius:12,
        paddingHorizontal:15,
        paddingVertical:15,
        top:70,
        justifyContent:'space-between'
    },
    cardTypeContainer:{
        display:'flex',
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    roundContainer:{
        display:'flex',
        flexDirection:'row',
       
        padding:1,
    },
    firstRound:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:Color.masterColor1,
        

    },
    secondRound:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:Color.masterColor2,
        right:12


    },
    cardTypeText:{
        fontSize:19,
        color:Color.white
    },
    cardNameAndCardNumberContainer:{
        display:'flex',
        flexDirection:'column',
      
        justifyContent:'flex-start'
    },
    cardName:{
        fontSize:18,
        fontWeight:'bold',
        color:Color.white,
        textTransform:'capitalize'

    },
    cardNumberContainer:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        alignItems:'center'

    },
    cardNumberText:{
        fontSize:25,
        letterSpacing:2,
        fontWeight:'bold',
        color:Color.white
    }

})