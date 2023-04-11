import React from "react";
import { View } from "react-native";
class DimensoesFixas extends React.Component{
render(){

return (
    <view>
        <view style={{ width:50,height:50,backgroundColor:'powderblue'}}/>
        <view style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <view style={{width:150,height:150,backgroundColor:'steelblue'}}/>

    </view>
);

}

};
export default DimensoesFixas;