import { useQuery } from "react-query";
import { getFetchArea } from "../services";

export const useFetchData=(url:string)=>{
    const {data:area,isLoading}=useQuery(url, ()=> getFetchArea(url));
    return {area,isLoading};
}