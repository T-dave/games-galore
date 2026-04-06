import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useAppTheme from "@/hooks/use-Theme";
import { Title } from "@/constants/text";
import { router } from "expo-router";

export default function Top({text}:{text:string}){
    const {colour} = useAppTheme()
    return(
        <View style={styles.top}>
            <TouchableOpacity onPress={()=>router.back()} style={{padding:10}}>
                <Icon name="angle-left" size={30} color={colour.text} />
            </TouchableOpacity>
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
    }
});