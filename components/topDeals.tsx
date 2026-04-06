import { Body, ButtonText } from "@/constants/text";
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from "react-native";
import { DealCard } from "./gameCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { router } from "expo-router";

interface RouteProps{
  gameID:string;
}

export default function TopDeals() {
    const topDealsData = useSelector((state: RootState) => state.store.topDealsData);
    const handlePress = ({gameID}:RouteProps) => {
      router.navigate({
        pathname: '/game',
        params: { id:gameID }
      });
    };
  return (
    <View style={styles.topDeals}>
      <View style={styles.topDealsTop}>
        <Body style={{marginBottom:10}}>Top Deals</Body>
        <TouchableOpacity onPress={()=>console.log(topDealsData)}>
          <ButtonText>View All</ButtonText>
        </TouchableOpacity>
      </View>
      {
        topDealsData.length > 0 ?
        topDealsData.slice(0,7).map((item: any, index: number) => {
        return (
            <DealCard
            onPress={() => handlePress(item)}
            item={item}
            key={index}
            />
        );
        })
        :
         <ActivityIndicator size={60}/>
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
