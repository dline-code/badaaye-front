import { api } from 'src/services/api'
import { userData, timeout } from '../mock'
import { SendDATA, StudentData } from '../type'

const getFetchStudentData = async (id: string): Promise<StudentData> => {
  //   const student = await api.get(`${id}`)
  //   return student.data
  //Não temos uma routa na API que resolve este problema
  await timeout(0)

  return userData
}

const putFetchStudentData = async (id: string, data: SendDATA) => {
  const student = await api.put(`estudante/${id}`, data)
  return student.data
}

export { getFetchStudentData, putFetchStudentData }
