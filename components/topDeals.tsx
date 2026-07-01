import { Body, ButtonText } from "@/constants/text";
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from "react-native";
import { DealCard } from "./gameCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { router } from "expo-router";

interface RouteProps{
  dealID:string;
}

export default function TopDeals({topDealsData}:any) {
    const handlePress = ({dealID}:RouteProps) => {
      router.navigate({
        pathname: '/gameStore',
        params: { id:dealID }
      });
    };
    const handleAll = ()=>{
      router.navigate({
        pathname: '/allGames',
        params: { data:JSON.stringify(topDealsData) }
      });
    }
  return (
    <View style={styles.topDeals}>
      <View style={styles.topDealsTop}>
        <Body style={{marginBottom:10}}>Top Deals</Body>
        <TouchableOpacity onPress={handleAll}>
          <ButtonText>View All</ButtonText>
        </TouchableOpacity>
      </View>
      {
        topDealsData.slice(0,7).map((item: any, index: number) => {

        return (
            <DealCard
              onPress={() => handlePress(item)}
              item={item}
              key={index}
            />
        );
        })
      }
    </View>
  );
}
const styles = StyleSheet.create({
  topDeals: {
    padding: 8,
    flex:1,
  },
  topDealsTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
