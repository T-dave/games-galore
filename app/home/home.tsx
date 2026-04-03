import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppTheme from "@/hooks/use-Theme";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import Banner from "@/components/banner";

export default function HomeScreen() {
  const bannerSliderData = useSelector((state: RootState) => state.banner.bannerData)
   const {colour} = useAppTheme();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colour.background}]}>
      <ScrollView>
        <Banner bannerSliderData={bannerSliderData}/>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{ 
    flex:1
  }
});
