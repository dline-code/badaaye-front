import { api } from "src/services/api"
import { IPartnerPart2 } from "../type";

export const getFetchArea = async (url:string) => {
    const area =await api.get(url);
    return area.data;
}

export const postFetchPartner = async (data:IPartnerPart2) => {
    const partner = await api.put('/cadastro/parceiro/2',data);
    return partner.data;
}