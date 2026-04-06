import { Body, Title } from "@/constants/text";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function StoreCards({item}:any){
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: `https://www.cheapshark.com${item.images.logo}`}} style={styles.image}/>
            <Title style={{fontSize:20, textDecorationLine:item.isActive === 0 ? "line-through" : 'none'}}>{item.storeName}</Title>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
        marginVertical:10
    },
    image:{
        width:30,
        height:30,
        marginRight:3
    },
    inner:{
        backgroundColor:"#00000055",
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
});