import { useCallback, useEffect, useState } from 'react'
import { getFetchCourse, getFetchDegree, getFetchProvince, getFetchUniversity, getFetchMuninicipality } from '../services'
import { ICourse, IDegree, IMunicipality, IProvinces, IUniversity } from '../type'

export function useFetchEstudantes() {
  const [provinces, setProvinces] = useState([])
  const [degree, setDegree] = useState([])
  const [municipalities, setMunicipalities] = useState([])
  const [university, setUniversity] = useState([])
  const [course, setCourse] = useState([])

  const getDataProvince= async () => {
    const data = await getFetchProvince();
    setProvinces(data);
  }

  const getDataDegree = async () => {
    const data = await getFetchDegree();
    setDegree(data);
  }

  const getDataCourse = async () => {
    const data = await getFetchCourse();
    setCourse(data)
  }

  const getDataMunicipalities= async (provinceId:string) =>{
    const data = await getFetchMuninicipality(provinceId);
    setMunicipalities(data)
  }

  const getDataUniversity = async () =>{
    const data = await getFetchUniversity();
    setUniversity(data);
  } 

  const handleFecthDatas = useCallback(() => {
    getDataProvince()
    getDataDegree()
    getDataCourse()
    getDataUniversity()
  }, [])

  useEffect(() => {
    handleFecthDatas()
  }, [handleFecthDatas])

  return {
    provinces,
    degree,
    course,
    university,
    municipalities,
    getDataMunicipalities,
    handleFecthDatas
  }
}
