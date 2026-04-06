import { Body, Title } from "@/constants/text";
import { View, Image, StyleSheet } from "react-native";
import Price from "./price";
import useAppTheme from "@/hooks/use-Theme";

interface StoreProps{
    logo: string;
    name: string;
    price: string;
    oldPrice:string;
}
export default function StoreCard({logo, name, price, oldPrice}:StoreProps){
    const { colour } = useAppTheme();
    return(
        <View style={[styles.row, styles.container, {backgroundColor:colour.cardBackground}]}>
            <View style={styles.row}>
                <Image source={{uri: logo}} style={styles.image}/>
                <Title style={{fontSize:19}}>{name}</Title>
            </View>
            <View style={styles.row}>
                <Body style={{marginRight:5}}>${price}</Body>
                <Price oldPrice={oldPrice} newPrice={price}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        padding:10,
        borderRadius:10,
        marginVertical:3
    },
    image:{
        width:28,
        height:28,
        marginRight:5
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    }
});