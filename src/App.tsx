

import { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Mega from "./componentes/MegaSena/Mega";
import Calculadora from "./componentes/Calculadora/Calculadora";


export default class App extends Component {
  render() {
    return (
      

      <View style={estilos.container}>

        {/*<Simples texto='wesley' /> 
         <Frag titulo="Cadastro" 
              subTitulo="Teda de Cadastro de Produto" /> 
         <ParImpar numero={10}  /> 12 
        <Familia>
            <Membro nome="wesley" sobreNome="alves"/>
            <Membro nome="Manuel" sobreNome="gonçales"/> 
        </Familia> 
        <UsuarioLogado usuario={ {nome:'testar', email:'wesley@gmail.com'} } /> 
        <UsuarioLogado usuario={ {nome:'testar navamente'} } />
        <UsuarioLogado usuario={ {email:'wesley@agamail.com'} } />        
        <UsuarioLogado usuario={ {} } />
        <UsuarioLogado usuario={ null } /> 
        <Contador valorInicial={30} />         
        <DigiteSeuNome /> 
        <DimensoesFixas /> 
        <Mega qtdeNumeros={7} />  
    */}
    
        <Calculadora />



      </View>
      

    );
  }
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonte: {
    fontSize: 50,
  },
})









// observação : codigo abaixo e javascript


{/*
//importacão  da biblioteca
import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet,Button,Image } from "react-native";
import {CreateDrawerNavigator,CreateAppContainer} from 'react-navigation';
import Mega from "./componentes/MegaSena/Mega";
import Calculadora from "./componentes/Calculadora/Calculadora";




// criando Menu usando DrawerNavigator


const DrawerNavigator=CreateDrawerNavigator(
    {
    calc:Calculadora,
    Mega:Mega,
    
   
    
},
{
    hideStatusBar:true,
    drawerBackgraundColor:' rgba(255,255,255,.9)',
    overlayColor:'#6b52ae',
    contentOptions:{
        activeTintColor:'#fff',
        activeBackgroundColor:'#6b52ae',

    },
}


);


export default CreateAppContainer(DrawerNavigator);

*/}



