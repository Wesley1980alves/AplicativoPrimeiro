import React, {Component} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
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



export default class App extends Component{
  render() {
    return (
      <View style={estilos. container}>

        
       {/* <  UsuarioLogado  usuario={ {nome:'Tenente Wesley ',email:'wesley1980alves@gmail.com'}}/>
        < UsuarioLogado usuario={{nome:'Teste 2'}}/>
        < UsuarioLogado usuario={{email:'wesley1980alves@gmail.com'}}/>
        < UsuarioLogado  usuario={null}/>
        < UsuarioLogado usuario={{}}/>
        


        {/*<Simples texto='WESLEY ALVES' /> 
         <Frag titulo="Cadastro" 
              subTitulo="TELA DE CADASTRO " /> 
         <ParImpar numero={9}  /> 15 
        <Familia>
            <Membro nome="Petriza Emily" sobreNome="Lamunier"/>
            <Membro nome="Wesley Alves
            " sobreNome="Lamunier"/> 
        </Familia>
        <Familia>
          <Membro nome="Meu Maior Amor"/>
          <Membro nome="Meu Filho"/>
          <Membro nome="Wyllyan Guilherme "/>        
    </Familia>
    <Botao/>
    <Contador valorInicial={55}/>*/}
    <DigiteSeuNome/>
            

      </View>
    );      
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontWeight:'bold',
      borderWidth:3,
      padding:10,
    },

    fonte: {
      fontSize: 50,

    },
  });