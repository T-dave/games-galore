import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import Banner from "@/components/banner";
import CustomContainer from "@/components/customContainer";
import TopDeals from "@/components/topDeals";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const bannerSliderData = useSelector((state: RootState) => state.banner.bannerData);
  const topDealsData = useSelector((state: RootState) => state.store.topDealsData);
  const handleNoti = ()=>{
    console.log("onboarding cleared")
    AsyncStorage.setItem("onboardingSeen", 'false')
  }
  return (
    <CustomContainer>
      <View style={styles.top}>
        <View style={styles.topTexts}>
          <Text style={styles.topText}>Games </Text>
          <Text style={[styles.topText, {color:Colors.primary}]}>Galore</Text>
        </View>
        <TouchableOpacity onLongPress={handleNoti}>
          <MaterialIcons name='notifications-none' size={23}/>
        </TouchableOpacity>
      </View>
        <Banner bannerSliderData={bannerSliderData.slice(0,8)}/>
        {
          topDealsData ?
          <TopDeals topDealsData={topDealsData}/>
          :
         <ActivityIndicator size={60}/>
        }
    </CustomContainer>
  );
}

const styles = StyleSheet.create({
  top:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:"space-between", 
    paddingHorizontal:15,
    marginBottom:10
  },
  topText:{
    fontSize:23,
    fontWeight:600
  },
  topTexts:{
    flexDirection:'row'
  }
});