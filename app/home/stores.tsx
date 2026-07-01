import CustomContainer from "@/components/customContainer";
import StoreCards from "@/components/storeCard";
import { RootState } from "@/store/store";
import { router } from "expo-router";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";

export default function StoresScreen() {
  const storeData = useSelector((state: RootState) => state.store.storeData);
  const handlePress = (storeID:string, storeName:string, images:any)=>{
    console.log(images)
    router.navigate({
      pathname: '/store',
      params: { 
        id:storeID,
        name:storeName,
        images:images.banner
       }
    });
  }
  return (
    <CustomContainer style={styles.container}>
      <View style={styles.stores}>
        {
          storeData.map((obj:any, index:number)=>
          <StoreCards key={index} item={obj} onPress={()=>handlePress(obj.storeID, obj.storeName, obj.images)}/>)
        }
      </View>
    </CustomContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal:8
  },
  stores:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
