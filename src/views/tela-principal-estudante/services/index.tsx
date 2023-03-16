import { api } from "src/services/api"

export const getFetchUsers= async () => {
    const user= await api.get(`/estudante`);

    return user.data;
}