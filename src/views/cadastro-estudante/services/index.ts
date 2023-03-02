import { api } from "src/services/api"
import { IStudent } from "../type"


const postFecthStudent1 = async (data: IStudent) => {
    const student = await api.post("/cadastro/estudante/1", data)
    return student.data
}

export { postFecthStudent1 }