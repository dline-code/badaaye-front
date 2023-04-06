import { api } from "src/services/api";
import { IPartner } from "../type";

export const getPartnerType = async () => {
    const partnerType = await api.get(`/tipoParceiro`);
    return partnerType.data;
}

export const postPartner = async (data:IPartner) => {
    const partner = await api.post(`/cadastro/parceiro/1`,data);
    return partner.data;
}