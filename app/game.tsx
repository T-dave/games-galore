import CustomContainer from "@/components/customContainer";
import Top from "@/components/ui/top";
import { Title } from "@/constants/text";
import useHook from "@/hooks/generalHook";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function GameScreen() {
    const { title, image } = useLocalSearchParams();
    const {showTitle} = useHook();
  return (
    <CustomContainer style={styles.container}>
        <Top text="Details"/>
      <View style={{paddingHorizontal:10}}>
        <ImageBackground source={{ uri: image as string }} style={styles.image} imageStyle={{borderRadius:10}}>
            <View style={styles.inner}>
            <Title color="#FFF">{showTitle(title as string, 20)}</Title>
            </View>
        </ImageBackground>
      </View>
    </CustomContainer>
  );
}

const styles = StyleSheet.create({
    container:{
        
    },
    image:{
        height:150,
    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#00000033",
        borderRadius:10
    }
});
