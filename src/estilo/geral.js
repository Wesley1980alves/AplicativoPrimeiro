import { metricas } from ".";
import cores from "./cores";
import fontes from ".";

const geral={
    container:{
        flex:1,
        backgroudcolor: cores.backgroud,

    },
    section:{
        margin:metricas.doubleBasemargin,
    },
    section:{
        color:cores.text,
        fontWeight:'bold',
        fontsize:fontes.regular,
        alignSelf:'center',
        marginBotton:metricas.doubleBaseMargin,

    },

}
export default geral;