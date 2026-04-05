import CustomContainer from "@/components/customContainer";
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from "react-native";
import { Body, Title } from '@/constants/text';
import Search from "@/components/ui/search";
import { useState } from "react";
import useData from "@/hooks/dataHook";
import { GameCard } from "@/components/gameCard";

const { height, width } = Dimensions.get("window");
export default function SearchScreen() {
  const { searchGame, searchLoadingState } = useData();
  const [data, setData] = useState([]);
  const handleSearch = async(text:string)=>{
    const games = await searchGame(text);
    setData(games);
  }
  return (
    <CustomContainer style={styles.container}>       
      <Title>Search</Title>
      <Search handleSearch={handleSearch}/>
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
        searchLoadingState === 'loaded' ?
        data.map((item: any, index: number) => {
          return (
            <GameCard key={index} item={item} onPress={()=>console.log("Hii")}/>
                );
          })
        :
        searchLoadingState === 'failed' ?
        <View style={styles.loaderView}>
          <Body>An Error occured</Body>
        </View>
        :
        <></>
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
  }
});