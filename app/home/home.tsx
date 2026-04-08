import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import Banner from "@/components/banner";
import CustomContainer from "@/components/customContainer";
import TopDeals from "@/components/topDeals";

export default function HomeScreen() {
  const bannerSliderData = useSelector((state: RootState) => state.banner.bannerData);
  return (
    <CustomContainer>
        <Banner bannerSliderData={bannerSliderData}/>
        <TopDeals/>
    </CustomContainer>
  );
}