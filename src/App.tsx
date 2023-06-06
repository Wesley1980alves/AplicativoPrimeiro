import React, {Component} from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import UsuarioLogado from "./componentes/relacao/UsuarioLogado";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import Padrao from "./estilo/Padrao";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/relacao/DigiteSeuNome";
import MostraFrase from "./componentes/relacao/MostraFrase";
import Dimensoesfixas from "./componentes/Dimensoesfixas";
import Mega from "./componentes/Mega";
import Calculadora from "./componentes/calculadora/Calculadora";


export default class App extends Component{

  render() {
    return (
      
      <View style={estilos.container}>
        <Calculadora/>
  

    
      </View>
    );      
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'red',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontWeight:'bold',
      borderWidth:5,
      padding:20,
    },

    fonte: {
      fontSize: 50,
      

    },
    calculadora:{
      flex:1,
      
    },
    buttons:{
      flexDirection:'row',
      flexWrap:'wrap',

    }

  });