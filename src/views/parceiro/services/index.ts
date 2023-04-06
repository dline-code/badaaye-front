import { api } from "src/services/api";

export const getPartnerType = async () => {
    const partnerType = await api.get(`/tipoParceiro`);
    return partnerType.data;
}
