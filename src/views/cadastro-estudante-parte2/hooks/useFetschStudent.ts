import { useState } from 'react'
import { getFetchCourse, getFetchDegree, getFetchProvince, getFetchUniversity, getFetchMuninicipality } from '../services'
import { useQuery } from 'react-query';

export function useFetchEstudantes() {
  const [municipalities,setMunicipalities]=useState([]);

  const { data:degree } = useQuery("degree", () => getFetchDegree());

  const { data:provinces} = useQuery("provinces", () => getFetchProvince());
  
  const { data:course} = useQuery("course", () => getFetchCourse());

  const { data:university} = useQuery("university", () => getFetchUniversity());

  const getDataMunicipalities= async (provinceId:string) =>{
    const data = await getFetchMuninicipality(provinceId);
    setMunicipalities(data);
  }

  return {
    provinces,
    degree,
    course,
    university,
    municipalities,
    getDataMunicipalities
  }
}
