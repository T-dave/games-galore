import Button from "@/components/button";
import CustomContainer from "@/components/customContainer";
import StoreCards from "@/components/storeCard";
import { Title } from "@/constants/text";
import useData from "@/hooks/dataHook";
import useAppTheme from "@/hooks/use-Theme";
import { RootState } from "@/store/store";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";

export default function StoresScreen() {
  const { deleteItem } = useData();
  const { toggleTheme } = useAppTheme();
  const storeData = useSelector((state: RootState) => state.store.storeData);
  
  return (
    <CustomContainer style={styles.container}>
      <View style={styles.stores}>
        {
          storeData.map((obj:any, index:number)=><StoreCards key={index} item={obj}/>)
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
