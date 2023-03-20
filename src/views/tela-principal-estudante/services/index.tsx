import { api } from "src/services/api"

export const getFetchStudent= async () => {
    const student= await api.get(`/estudante/dados`);

    return student.data;
}