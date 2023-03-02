
import {api} from "src/services/api"
import {IStudent} from "../type"

export const putFetchStudentPart2 = async (data: IStudent) => {
    const student = await api.put("/cadastro/estudante/2", data);
    return student.data;
}

export const getFetchMuninicipality = async (provinciaId:string) => {
    const municipalities = await api.get(`/municipio/${provinciaId}`);
    return municipalities.data;
}

export const getFetchProvince = async () => {
    const provinces = await api.get(`/provincia`);
    return provinces.data;
}

export const getFetchDegree = async () => {
    const degree = await api.get(`/grau`);
    return degree.data;
}

export const getFetchCourse = async () => {
    const course = await api.get(`/curso`);
    return course.data;
}

export const getFetchUniversity = async () => {
    const university = await api.get(`/universidade`);
    return university.data;
}