import { useQuery } from "react-query"
import { getFetchStudent } from "../services"

export const useFetchData = () => {
    const {data:student}=useQuery("students", () => getFetchStudent());
    
    return{student}
}