import { api } from "src/services/api";
import { IPartner } from "../type";

export const getPartnerType = async () => {
    const partnerType = await api.get(`/tipoParceiro`);
    return partnerType.data;
}

export const postPartner = async (url:string,data:IPartner) => {
    const partner = await api.post(url,data);
    return partner.data;
}