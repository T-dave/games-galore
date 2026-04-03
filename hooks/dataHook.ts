import { useDispatch } from 'react-redux';
import { setBannerData } from '@/store/slices/bannerSlice';

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
    return { fetchBanner }
}