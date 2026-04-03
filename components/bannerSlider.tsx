import { ImageBackground, StyleSheet, ImageBackgroundProps, View, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Title } from "@/constants/text";

const { width } = Dimensions.get("window");

interface Props extends ImageBackgroundProps{
    item: any;
}
export default function BannerSlider({ item, style }:Props){
    const showTitle = (title:string)=>{
        if(title.length < 25) return title
        else return title.slice(0,25) + "..."
    }
    const savings = (oldPrice: string, newPrice: string)=>{
        const oldNum = Number(oldPrice);
        const newNum = Number(newPrice);
        return Math.round(((newNum - oldNum) / newNum) * 100)
    }
    return(
        <View style={{width:width, paddingHorizontal:5}}>
            <ImageBackground source={{uri: item.thumb}} style={[styles.banner, style]} imageStyle={{borderRadius:10}} >
                <LinearGradient 
                colors={['rgba(0,0,0,0.7)', 'transparent']}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
                style={styles.innerView}
                >
                    <View style={styles.price}>
                        <Body 
                        style={{fontSize:13}} 
                        color="white">
                            -{savings(item.salePrice, item.normalPrice)}%
                        </Body>
                    </View>
                    <Title color="white" style={styles.title}>{showTitle(item.title)}</Title>
                    <View style={styles.bottom}>
                        <Body color="white" style={styles.oldPrice}>${item.normalPrice}</Body>
                        <Body color="white">${item.salePrice}</Body>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    banner:{
        
    },
    innerView:{
        height:140,
        borderRadius:10,
        justifyContent:'space-between',
        padding:8
        },
    title:{
        alignSelf:'center',
        fontSize:25
    },
    price:{
        backgroundColor:'green',
        alignSelf:'flex-start',
        padding:4
    },
    bottom:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    oldPrice:{
        color:"#DDDDDD",
        textDecorationLine:"line-through",
        fontSize:13,
        marginRight:8
    }
})