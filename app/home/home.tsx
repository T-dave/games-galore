import { StyleSheet, ScrollView, View, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppTheme from "@/hooks/use-Theme";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import Banner from "@/components/banner";
import { Body, ButtonText } from "@/constants/text";
import TopDeals from "@/components/topDeals";

const { height } = Dimensions.get("window");
export default function HomeScreen() {
  const bannerSliderData = useSelector((state: RootState) => state.banner.bannerData)
   const {colour} = useAppTheme();
  return (
    <SafeAreaView edges={["top"]} style={[styles.container, {backgroundColor: colour.background}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner bannerSliderData={bannerSliderData}/>
        <TopDeals/>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{ 
    flex:1,
  },
  topDeals:{
    padding:8
  },
  topDealsTop:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
