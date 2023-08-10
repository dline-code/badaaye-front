import { getCookie } from "react-use-cookie";


const usePartner = () => {
    const token = getCookie("baadaye-token");
    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }


    return {
        options
    }
}

export { usePartner }