import React from "react";
import { StyleSheet,Text,View} from "react-native";

const estilo=StyleSheet.create({

    display:{
        flex:1,
        padding:20,
        backgroundColor:'black',
        alignItems:'flex-end',
        justifyContent:'center',
      
    },
    displayValue:{
        fontSize:60,
        color:'#fff',
    }

})

export default props=>{
    return(
        <View style={estilo.display}>
            <Text style={estilo.displayValue} numberOfLines={1}>
                {props.value}
            </Text>

        </View>
       


    )
}