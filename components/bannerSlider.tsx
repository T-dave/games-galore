import { ImageBackground, StyleSheet, ImageBackgroundProps, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Title } from "@/constants/text";
import useHook from "@/hooks/generalHook";
import Price from "./ui/price";

const { width } = Dimensions.get("window");

interface Props extends ImageBackgroundProps{
    item: any;
    onPress: ()=>void;
}
export default function BannerSlider({ item, style, onPress }:Props){
    const { showTitle } = useHook();
    return(
        <TouchableOpacity style={{width:width, paddingHorizontal:10}} onPress={onPress}>
            <ImageBackground source={{uri: item.thumb}} style={[styles.banner, style]} imageStyle={{borderRadius:10}} >
                <LinearGradient 
                colors={['rgba(0,0,0,0.7)', 'transparent']}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
                style={styles.innerView}
                >
                    <Price oldPrice={item.normalPrice} newPrice={item.salePrice}/>
                    <View>
                        <Title color="white" style={styles.title}>{showTitle(item.title)}</Title>
                        <View style={styles.bottom}>
                            <Body color="white" style={styles.oldPrice}>${item.normalPrice}</Body>
                            <Body color="white">${item.salePrice}</Body>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    banner:{
        
    },
    innerView:{
        height:160,
        borderRadius:10,
        justifyContent:'space-between',
        padding:8
        },
    title:{
        fontSize:25
    },
    bottom:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
    },
    oldPrice:{
        color:"#DDDDDD",
        textDecorationLine:"line-through",
        fontSize:13,
        marginRight:5
    }
})