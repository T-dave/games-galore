import { Body, Caption, Subtitle } from "@/constants/text";
import useHook from "@/hooks/generalHook";
import useAppTheme from "@/hooks/use-Theme";
import { RootState } from "@/store/store";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Price from "./ui/price";

interface GameProp {
  item: any;
  onPress: () => void;
}
export default function GameCard({ item, onPress }: GameProp) {
  const storeData = useSelector((state: RootState) => state.store.storeData);
  const getStore = (id: string) =>
    storeData.filter((obj: { storeID: string }) => obj.storeID === id);
  const store = getStore(item.storeID)[0];

  const { showTitle } = useHook();
  const { colour } = useAppTheme();
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colour.cardBackground }]}
      onPress={onPress}
    >
      <View style={styles.priceSavings}>
        <Price oldPrice={item.normalPrice} newPrice={item.salePrice} />
      </View>
      <Image
        source={{ uri: item.thumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.texts}>
        <Subtitle style={{ fontSize: 20 }}>{showTitle(item.title, 22)}</Subtitle>
        <View style={styles.price}>
          <Body style={styles.oldPrice}>${item.normalPrice}</Body>
          <Body>${item.salePrice}</Body>
        </View>
        <View style={styles.store}>
          <Image
            source={{ uri: `https://www.cheapshark.com${store.images.logo}` }}
            style={styles.storeLogo}
            resizeMode="contain"
          />
          <Caption>{store.storeName}</Caption>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 5,
  },
  priceSavings: {
    position: "absolute",
    zIndex: 2,
    padding: 3,
  },
  image: {
    width: 90,
    height: 95,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    fontSize: 13,
    marginRight: 5,
  },
  texts: {
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingLeft: 5,
  },
  storeLogo:{
    width:20,
    height:20,
    marginRight:5
  },
  store:{
    flexDirection:'row',
    alignItems:'center'
  }
});
