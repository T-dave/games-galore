import { ImageBackground, StyleSheet, ImageBackgroundProps, View, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Title } from "@/constants/text";

const { width } = Dimensions.get("window");

interface Props extends ImageBackgroundProps{
    image: string;
    name: string;
}
export default function BannerSlider({image, style, name}:Props){
    return(
        <View style={{width:width, paddingHorizontal:5,}}>
            <ImageBackground source={{uri: image}} style={[styles.banner, style]} imageStyle={{borderRadius:10}}>
                <LinearGradient 
                colors={['rgba(0,0,0,0.7)', 'transparent']}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
                style={styles.innerView}
                >
                    <View>
                        <Body color="white">Featured Deal</Body>
                    </View>
                    <Title color="white" style={{alignSelf:'center'}}>{name}</Title>
                    <View style={styles.bottom}>
                        <Body color="white">{name}</Body>
                        <Body color="white">{name}</Body>
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
        height:150,
        borderRadius:10,
        justifyContent:'space-between',
        padding:8
        },
    bottom:{
        flexDirection:'row',
        width:'100%',
       justifyContent:'center',
    }
})