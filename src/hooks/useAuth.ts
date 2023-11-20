import { useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'

export function useAuth() {
  return useContext(AuthContext)
}
