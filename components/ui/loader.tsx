import { ActivityIndicator, View, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
export default function Loader(){
    return(
        <View style={styles.loaderView}>
            <ActivityIndicator size={60}/>
        </View>
    )
}

const styles = StyleSheet.create({
    loaderView:{
    position:'absolute',
    height:height,
    width:width,
    alignItems:'center',
    justifyContent:'center',
  }
});