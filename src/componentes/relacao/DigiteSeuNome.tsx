import React ,{useState}from "react";
import {TextInput} from 'react-native';
import Padrao from "../../estilo/Padrao";


export default(props:any)=>{

    let [nome,setNome ]= useState('teste')

    return (
        <>
        <TextInput
        style={Padrao.input}
        placeholder="Digite Seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
        />

        </>
    )


    

}