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
import Button from "./componentes/calculadora/Button";
import Display from "./componentes/calculadora/Display";


export default class App extends Component{
  state={
    displayValue:'0',
  }
  clearDisplay=()=>{
    this.setState({displayValue:'0'})

  }
  setDigite=(digito:any)=>{
    this.setState({displayValue:digito})
  }
  setOperacao=(op:any)=>{

  }
  render() {
    return (
      
      <View style={estilos.calculadora}>
        <Display value={this.state.displayValue}/>
        <View style={estilos.buttons}>
          <Button label='AC' triple onClick={()=>this.clearDisplay()} />
          <Button label='/' op  onClick={this.setOperacao}/>
          <Button label='7' onClick={this. setDigite}/>
          <Button label='8' onClick={this.setDigite}/>
          <Button label='9' onClick={this.setDigite}/>
          <Button label='*' op onClick={this.setOperacao}/>
          <Button label='4'onClick={this.setDigite}/>
          <Button label='5'onClick={this.setDigite}/>
          <Button label='6'onClick={this.setDigite}/>
          <Button label='-' op onClick={this.setOperacao}/>
          <Button label='1'onClick={this.setDigite}/>
          <Button label='2'onClick={this.setDigite}/>
          <Button label='3'onClick={this.setDigite}/>
          <Button label='+' op onClick={this.setOperacao}/>
          <Button label='0'onClick={this.setDigite}/>
          <Button label='.'onClick={this.setDigite}/>
          <Button label='='onClick={this.setOperacao}/>

        </View>

  
    
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