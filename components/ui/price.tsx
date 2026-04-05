import { View, StyleSheet } from "react-native";
import { Body } from "@/constants/text";
import useHook from "@/hooks/generalHook";

interface PriceProp{
    oldPrice: string;
    newPrice: string;
}
export default function Price({oldPrice, newPrice}:PriceProp){
    const { savings } = useHook();
    return(
        <View style={styles.price}>
            <Body 
                style={{fontSize:13}} 
                color="white">
                    -{savings(newPrice, oldPrice)}%
            </Body>
        </View>
    )
}

const styles = StyleSheet.create({
    price:{
        backgroundColor:'green',
        alignSelf:'flex-start',
        padding:4,
        borderRadius:5
    },
});