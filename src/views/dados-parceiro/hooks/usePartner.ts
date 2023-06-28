import { useState } from "react"
import { useFetch } from "src/hooks/useFetch"
import { usePartner } from "../../../../src/views/tela-principal-parceiro/hooks/usePartner"
import { toast } from "react-toastify"
import { ApiResponse } from "../type"
import { api } from "src/services/api"
import { useMutation } from "react-query"



// export const usePartnerhook = ( PartnerData ) => {

//     console.log(PartnerData);




//     return {
//         initialValues,
//         PartnerData,
//         handleSubmit
//     }
// }
