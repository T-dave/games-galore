import { DealCard } from "@/components/gameCard";
import {  Title } from "@/constants/text";
import { router, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Games(){
    const { data } = useLocalSearchParams();
    const userData = data ? JSON.parse(data) : null;
    const handlePress = (dealID:string) => {
        router.navigate({
            pathname: '/gameStore',
            params: { id:dealID }
          });
    };
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                <Title style={{marginBottom:10, textAlign:'center'}}>Top Deals</Title>
                {
                    data ?
                    userData.map((item: any, index: number) => {
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