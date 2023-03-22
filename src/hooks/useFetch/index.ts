import { useQuery } from "react-query";
import { api } from "src/services/api";



const useFetch = (url: string) => {
    const { data, error, isLoading } = useQuery(url, async () => {
        const response = await api.get(url);
        const data = await response.data;
        return data
    });

    return { data, error, isLoading };
}

export { useFetch }