import BannerSlider from "@/components/bannerSlider";
import { View, FlatList, Dimensions } from "react-native";
import { useRef, useState, useEffect } from "react";
import Paginator from "@/components/paginatorBanner";

const { width } = Dimensions.get("window");
export default function Banner({bannerSliderData}:any) {
  useEffect(() => {
  if (!bannerSliderData.length) return;

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        prevIndex < bannerSliderData.length - 1 ? prevIndex + 1 : 0;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      return nextIndex;
    });
  }, 4000);

  return () => clearInterval(interval);
}, [bannerSliderData]);
  
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
  return (
      <View>
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
        renderItem={({item})=><View><BannerSlider item={item}/></View>}
        />
        <Paginator data={bannerSliderData} currentIndex={currentIndex} />
      </View>
  );
}
