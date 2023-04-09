import { useQuery } from "react-query";
import { getPartnerType } from "../services";

export const useFetchData=(url:string)=>{
    const {data:partnerType,isLoading}=useQuery(url, ()=> getPartnerType(url));
    return {partnerType,isLoading};
}