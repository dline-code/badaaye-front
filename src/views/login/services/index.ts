import { api } from "src/services/api"
import { IUser } from "../type"

export const postFetchUser = async (data: IUser) => {
    const user = await api.post("/sessao", data)
    return user.data;
}
