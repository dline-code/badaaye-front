import { useQuery } from "react-query"
import { api } from "src/services/api"


const useFetch = (url: string, options = {}) => {
    const { data, error, isLoading } = useQuery(url, async () => {
        const response = (await api(url, options)).data
        return response
    })
    return {
        data,
        error,
        isLoading
    }
}


export { useFetch }