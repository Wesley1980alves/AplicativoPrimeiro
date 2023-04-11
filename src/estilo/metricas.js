import { Dimensions,Platform } from "react-native/types";
const{widht,height}=Dimensions.get("window");

const metrica={
smallMargin:5,
baseMargin:10,
doubleBaseMargin:20,
screenWidth: width<heidth?width:height,
screenWidth:widht<height?height:widht,
tabBarHeigth:(Platform.OS==='ios') ? 64:54,
statusBarheigth:(Platform.OS==='ios')? 20:0,
baseRadius:3,

};
export default metricas;