import { useContext } from 'react'
import { AuthContext } from 'src/context/auth-content'

export function useAuth() {
  return useContext(AuthContext)
}
