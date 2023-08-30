import { useState } from 'react'
import { api } from 'src/services/api'

export function useRecordData() {
  const [grau, setGrau] = useState()

  const getGrauData = async () => {
    const response = await api.get('/grau')
  }

  const getUniversidadeData = async () => {
    const response = await api.get('/universidade')
  }

  const getCursoData = async () => {
    const response = await api.get('/curso')
  }

  const getPeriodoData = async () => {
    const response = await api.get('/periodo')
  }

  const getAreaData = async () => {
    const response = await api.get('/area')
  }

  const getProvinciaData = async () => {
    const response = await api.get('/area')
  }

  const getMunicipioData = async () => {
    const response = await api.get('/area')
  }

  return {}
}
