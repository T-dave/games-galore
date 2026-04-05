import { useDispatch } from 'react-redux';
import { setBannerData } from '@/store/slices/bannerSlice';
import { setStoreData, setTopDealsData } from '@/store/slices/storeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export default function useData(){
    const dispatch = useDispatch()
    const fetchBanner = async ()=>{
        try{
        const response = await fetch(`${BASE_URL}/deals?storeID=1&minimumReviewCount=150000&onSale=1`);
           const data = await response.json();
           dispatch(setBannerData(data))
        }catch(error){
            console.error(error);
        }
    }
    const fetchStore = async ()=>{
        try{
        const response = await fetch(`${BASE_URL}/stores`);
           const data = await response.json();
           dispatch(setStoreData(data))
        }catch(error){
            console.error(error);
        }
    }
    const fetchTopDeals = async ()=>{
        try{
        const response = await fetch(`${BASE_URL}/deals?savings=80`);
           const data = await response.json();
           dispatch(setTopDealsData(data))
        }catch(error){
            console.error(error);
        }
    }
    const deleteItem = async (key:any) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Item deleted successfully');
    } catch (error) {
        console.error('Error deleting item:', error);
    }
    };

    return { fetchBanner, deleteItem, fetchStore, fetchTopDeals }
}