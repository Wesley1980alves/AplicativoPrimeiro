import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";



export default class mega extends (Component){
    

constructor(props){
    super(props)
    this.alteraQtde=this.alteraQtde.bind(this)
}
gerarNumeroNaoContido=nuns=>{
    const novo=parseInt(Math.random()*60)+1
    return nuns 
}


   

render(){
    return(
        <>        <Text style={Padrao.txtG}>
            Gerador de mega sena{this.state.gtdeNUmeros}

            

        </Text>
        <TextInput
        placeholder="Qtde de Número"
        value={this.state.gtdeNUmeros}
        onChangeText={this.alteraQtde}
        keyboardType="" 
        />
        </>


    )
    
}
}





