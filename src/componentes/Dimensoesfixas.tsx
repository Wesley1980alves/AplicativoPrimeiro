import React from "react";
import { View} from "react-native";

export default (props:any)=>{
    return(
        
        
        <View style={{width:'100%',height:'100%',flexDirection:'row',flexWrap:'wrap'}}>
        
           <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
           <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
           <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>  
           <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
           
        </View>
        
    
    )
}