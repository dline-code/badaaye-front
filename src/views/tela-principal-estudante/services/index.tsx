import { api } from "src/services/api"

export const getFetchStudent= async (url:string) => {
    const student= await api.get(url);
    
    return student.data;
}