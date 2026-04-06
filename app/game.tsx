import CustomContainer from "@/components/customContainer";
import Loader from "@/components/ui/loader";
import Top from "@/components/ui/top";
import { Body, Title } from "@/constants/text";
import useData from "@/hooks/dataHook";
import useHook from "@/hooks/generalHook";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import Price from "@/components/ui/price";
import StoreCard from "@/components/ui/storeCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function GameScreen() {
    const {showTitle} = useHook();
    const { getGame, gameLoadingState } = useData();
    const [gameData, setGameData] = useState<any>(null);
    const { id } = useLocalSearchParams();
    const gameID = Array.isArray(id) ? id[0] : id;
    useEffect(() => {
        if (!id) return;

        const fetchGame = async () => {
            const data = await getGame(gameID);
            setGameData(data);
        
    };
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    const storeData = useSelector((state: RootState) => state.store.storeData);
    const store =(storeId:string)=> storeData.filter((obj: { storeID: string; })=>obj.storeID === storeId);
    const highestPrice =(deals: {retailPrice: string; }[])=>{
        const prices: number[] = [];
        deals.forEach((deal: { retailPrice: string; })=>prices.push(Number(deal.retailPrice)));
        return Math.max(...prices);
    }
    
  return (
    <CustomContainer style={styles.container}>
        <Top text="Game"/> 
        {
            gameLoadingState === 'loading'  || !gameData ?
            <Loader/>
            :
            <View style={{paddingHorizontal:10}}>
                <Image source={{ uri: gameData.info.thumb }} style={styles.image}/>
                <Title style={{alignSelf:'center', fontSize:20}}>{gameData.info.title}</Title>
                <View style={styles.historicalLowView}>
                    <Title style={{fontSize:23}}>
                        Historical Low
                    </Title>
                    <View style={styles.pricesView}>
                        <Body style={styles.oldPrice}>${highestPrice(gameData.deals).toString()}</Body>
                        <Body style={{marginRight:10}}>${gameData.cheapestPriceEver.price}</Body>
                        <Price oldPrice={highestPrice(gameData.deals).toString()} newPrice={gameData.cheapestPriceEver.price}/>
                    </View>
                </View>
                <View style={styles.storesView}>
                    <Title style={{fontSize:23, marginBottom:5}}>
                        Price at stores
                    </Title>
                    {
                        gameData.deals.map((deal: { storeID: string; price: string; retailPrice: string; }, index:string)=>{
                            return(
                                <StoreCard 
                                    key={index}
                                    logo={`https://www.cheapshark.com${store(deal.storeID)[0].images.logo}`} 
                                    name={store(deal.storeID)[0].storeName}
                                    price={deal.price}
                                    oldPrice={deal.retailPrice}
                                    />
                            )
                        })
                    }
                    
                </View>
            </View>
        }
    </CustomContainer>
  );
}

const styles = StyleSheet.create({
    container:{
        
    },
    image:{
        height:150,
        borderRadius:10
    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#00000033",
        borderRadius:10
    },
    pricesView:{
        flexDirection:'row',
        alignItems:'center'
    },
    oldPrice:{
        textDecorationLine:'line-through',
        opacity:0.6,
        fontSize:13,
        marginRight:3
    },
    historicalLowView:{
        marginVertical:10
    },
    storesView:{
        
    }
});
