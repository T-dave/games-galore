import CustomContainer from "@/components/customContainer";
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from "react-native";
import { Body, Title } from '@/constants/text';
import Search from "@/components/ui/search";
import { useState } from "react";
import useData from "@/hooks/dataHook";
import { GameCard } from "@/components/gameCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import StoreCard from "@/components/storeCard";
import { router } from "expo-router";

const { height, width } = Dimensions.get("window");

export default function SearchScreen() {
  const storeData = useSelector((state: RootState) => state.store.storeData);
  const handlePress = async (id:string) => {
    router.navigate({
      pathname: '/game',
      params: { id:id }
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
            <GameCard key={index} item={item} onPress={()=>handlePress(item.gameID)}/>
                );
          })
        :
        searchLoadingState === 'failed' ?
        <View style={styles.loaderView}>
          <Body>An Error occured</Body>
        </View>
        :
        <View>
          <Title style={{fontSize:25, marginBottom:5}}>Sores</Title>
          <View style={styles.stores}>
            {
              storeData.map((obj:any, index:number)=><StoreCard key={index} item={obj}/>)
            }
          </View>
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