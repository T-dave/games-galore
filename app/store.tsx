import { DealCard } from "@/components/gameCard";
import useData from "@/hooks/dataHook";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Store(){
    const { id, images } = useLocalSearchParams();
    const [ data, setData ] = useState<any>();
    const handlePress = (dealID:string) => {
        router.navigate({
            pathname: '/gameStore',
            params: { id:dealID }
          });
    };
    const { fetchStoreGames } = useData();
    useEffect(()=>{
        console.log(images)
        const fetch = async()=>{
            const info = await fetchStoreGames(id);
            await setData(info);
        }
        fetch();
    }, [fetchStoreGames])
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                <View style={styles.banner}>
                    <Image source={{ uri: `https://www.cheapshark.com${images}`}} style={styles.image} resizeMode="contain"/>
                </View>
                {
                    data ?
                    data.slice(0,7).map((item: any, index: number) => {
                    return (
                        <DealCard
                            onPress={() => handlePress(item.dealID)}
                            item={item}
                            key={index}
                        />
                        );
                    })
                    :
                    <View style={styles.activity}>
                        <ActivityIndicator size={60}/>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15
    },
    activity:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:150,
    },
    banner:{
        height:180,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#898989',
        borderRadius:10
    }
});