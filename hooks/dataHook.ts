import { setBannerData } from "@/store/slices/bannerSlice";
import { setStoreData, setTopDealsData } from "@/store/slices/storeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useDispatch } from "react-redux";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export default function useData() {
  const dispatch = useDispatch();
  const [searchLoadingState, setSearchLoadingState] = useState("none");
  const [gameLoadingState, setGameLoadingState] = useState("none");
  const fetchBanner = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/deals?storeID=1&minimumReviewCount=150000&onSale=1`,
      );
      const data = await response.json();
      dispatch(setBannerData(data));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchStore = async () => {
    try {
      const response = await fetch(`${BASE_URL}/stores`);
      const data = await response.json();
      dispatch(setStoreData(data));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTopDeals = async () => {
    try {
      const response = await fetch(`${BASE_URL}/deals?savings=80`);
      const data = await response.json();
      dispatch(setTopDealsData(data));
    } catch (error) {
      console.error(error);
    }
  };
  const searchGame = async (game: string) => {
    setSearchLoadingState("loading");
    try {
      const response = await fetch(`${BASE_URL}/games?title=${game}`);
      const data = await response.json();
      setSearchLoadingState("loaded");
      return data;
    } catch (error) {
      setSearchLoadingState("failed");
      console.error(error);
    }
  };
  const getGame = async (id: string) => {
    setGameLoadingState("loading");
    try {
      const response = await fetch(`${BASE_URL}/games?id=${id}`);
      const data = await response.json();
      setGameLoadingState("loaded");
      return data;
    } catch (error) {
      setGameLoadingState("failed");
      console.error(error);
    }
  };
  const deleteItem = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return {
    fetchBanner,
    deleteItem,
    fetchStore,
    fetchTopDeals,
    searchGame,
    getGame,
    searchLoadingState,
    gameLoadingState,
  };
}
