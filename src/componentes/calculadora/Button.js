import React from "react";
import { StyleSheet,Text,Dimensions,TouchableHighlight } from "react-native";

const estilo=StyleSheet.create({

    button:{
        fontSize:20,
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'red',
        borderColor:'black',
        textAlign:'center',
        borderWidth:1,

    },
    botaoOp:{
        color:'#fff',
        backgroundColor:'#fa8231',
    },
    botaoDouble:{
        width:(Dimensions.get('window').width/4) *  2,

    },
    botaotriple:{
        width:(Dimensions.get('window').width/4) * 3,
    },


    calculadora:{
    flex:1,
  
    },
    buttons:{
    flexDirection:'row',
    flexWrap:'wrap',

}

})

export default props=>{
    const styleButton=[estilo.button]
    if(props.double) styleButton.push(estilo.botaoDouble)
    if(props.triple) styleButton.push(estilo.botaotriple)
    if(props.op) styleButton.push(estilo.botaoOp)

    return(
        <TouchableHighlight onPress={()=>props.onClick(props.label)}> 
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>




    )
}