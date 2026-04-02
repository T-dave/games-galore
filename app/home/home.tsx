import BannerSlider from "@/components/bannerSlider";
import { StyleSheet, View, FlatList, ScrollView, Dimensions } from "react-native";
import bannerSliderData from "@/data/bannerSliderData";
import { useRef, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Paginator from "@/components/paginatorBanner";
import useAppTheme from "@/hooks/use-Theme";

const { width } = Dimensions.get("window");
export default function HomeScreen() {
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex < bannerSliderData.length - 1 ? prevIndex + 1 : 0;
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      return nextIndex;
    });
  }, 4000);

  return () => clearInterval(interval);
}, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
  if (viewableItems.length > 0) {
    setCurrentIndex(viewableItems[0].index);
  }
}).current;
const viewConfig = useRef({
  viewAreaCoveragePercentThreshold: 50,
}).current;
   const {colour} = useAppTheme();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colour.background}]}>
      <ScrollView>
        <FlatList
        data={bannerSliderData}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        ref={flatListRef}
        renderItem={({item})=><View><BannerSlider image={item.image} name={item.name}/></View>}
        />
        <Paginator data={bannerSliderData} currentIndex={currentIndex} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{ 
    flex:1
  }
});
