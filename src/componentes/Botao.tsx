import React from "react";
import {Button} from "react-native";


export default(porps:any)=>{
function executar(){
    console.warn('Botao acionado!')

}

return(
    <>
    <Button
    title="executar"
    onPress={executar}
    />
    <Button
    title="Executar #2"
    onPress={function(){
        console.warn("Exec. #2")
    }}
    />
    <Button 
    title="Executar #3"
    onPress={()=>console.warn("Exec.#3")}

    />
    
    </>
    



);

}