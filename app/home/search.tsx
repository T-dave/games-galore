import CustomContainer from "@/components/customContainer";
import { StyleSheet, View, ActivityIndicator, Dimensions } from "react-native";
import { Body } from '@/constants/text';
import Search from "@/components/ui/search";
import { useState } from "react";
import useData from "@/hooks/dataHook";
import { GameCard } from "@/components/gameCard";
import { router } from "expo-router";

const { height, width } = Dimensions.get("window");

export default function SearchScreen() {
  const handlePress = async (dealID:string) => {
    console.log(dealID)
    router.navigate({
      pathname: '/gameStore',
      params: { id:dealID }
    });
  };
  const { searchGame, searchLoadingState, setSearchLoadingState } = useData();
  const [data, setData] = useState([]);
  const handleSearch = async(text:string)=>{
    const games = await searchGame(text);
    setData(games);
  }
  const handleClear= ()=>{
    setData([]);
    setSearchLoadingState('none');
  }
  return (
    <CustomContainer style={styles.container}>
      <Search handleSearch={handleSearch} clear={handleClear}/>
      <View style={{margin:8}}/>
      {
        searchLoadingState === 'loading' ?
        <View style={styles.loaderView}>
          <ActivityIndicator size={60}/>
        </View>
        :
        searchLoadingState === 'loaded' && data.length === 0 ?
        <View style={styles.loaderView}>
          <Body>No results found</Body>
        </View>
        :
        searchLoadingState === 'loaded' && data.length > 0 ?
        data.map((item: any, index: number) => {
          return (
            <GameCard key={index} item={item} onPress={()=>handlePress(item.cheapestDealID)}/>
                );
          })
        :
        searchLoadingState === 'failed' ?
        <View style={styles.loaderView}>
          <Body>An Error occured</Body>
        </View>
        :
        <View>
         
        </View>
      }
    </CustomContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
  },
  loaderView:{
    position:'absolute',
    flex:1,
    height:height,
    width:width,
    alignItems:'center',
    justifyContent:'center',
  },
  stores:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});