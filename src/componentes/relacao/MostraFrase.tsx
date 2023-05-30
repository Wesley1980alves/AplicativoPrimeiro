import React ,{useState} from "react";
import { TextInput } from "react-native";
import Padrao from "../../estilo/Padrao";
{}
export default(props:any)=>{

    let [frase,setNome ]= useState(' Metafísica ')

    return (
        <>
        <TextInput
        style={Padrao.text}
        placeholder="escreva uma frase qualquer "
        value={frase}
        onChangeText={nome => setNome(frase)}
        />

        </>
    )
}