import { useQuery } from "react-query"
import { getFetchUsers } from "../services"

export const useFetchData = () => {
    const {data:students}=useQuery("students", () => getFetchUsers());
    return{students}
}