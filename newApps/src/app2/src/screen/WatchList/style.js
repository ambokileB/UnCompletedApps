import { StyleSheet } from "react-native";
import { Color } from "../../constants/Colors";


export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Color.white,
        paddingVertical:23,
        flex:1
    }
})