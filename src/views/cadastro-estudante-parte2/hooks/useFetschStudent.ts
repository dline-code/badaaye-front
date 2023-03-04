import useSWR from 'swr'
import { useState } from 'react'
import { getFetchCourse, getFetchDegree, getFetchProvince, getFetchUniversity, getFetchMuninicipality } from '../services'

export function useFetchEstudantes() {
  const [municipalities,setMunicipalities]=useState([]);

  const { data:degree, error:degreeError } = useSWR("degree", async ()=> {
    const data = await getFetchDegree();

    return data;
  });

  const { data:provinces, error:procincesError } = useSWR("provinces", async ()=> {
    const data = await getFetchProvince();

    return data;
  });

  const { data:course, error:courseError } = useSWR("courses", async ()=> {
    const data = await getFetchCourse();

    return data;
  });

  const { data:university, error:universityError } = useSWR("university", async ()=> {
    const data = await getFetchUniversity();

    return data;
  });

  const getDataMunicipalities= async (provinceId:string) =>{
    const data = await getFetchMuninicipality(provinceId);
    setMunicipalities(data)
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
