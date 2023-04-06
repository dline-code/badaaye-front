import { useQuery } from "react-query";
import { getPartnerType } from "../services";

export const useFetchData=()=>{
    const {data:partnerType,isLoading}=useQuery("getPartnerType", ()=> getPartnerType());
    return {partnerType,isLoading};
}