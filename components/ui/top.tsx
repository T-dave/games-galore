import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useAppTheme from "@/hooks/use-Theme";
import { Title } from "@/constants/text";
import { router } from "expo-router";

export default function Top({text}:{text:string}){
    const {colour} = useAppTheme()
    return(
        <View style={styles.top}>
            <TouchableOpacity onPress={()=>router.back()} style={styles.back}>
                <Icon name="angle-left" size={25} color={colour.text} />
            </TouchableOpacity>
            <View/>
            <Title style={{fontSize:28}}>{text}</Title>
            <View/>
        </View>
    )
}

const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    back:{
        padding:15, 
        position:'absolute'
    }
});