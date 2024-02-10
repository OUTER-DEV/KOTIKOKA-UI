import { useAuth } from '@/app/context/AuthContext'
import React from 'react'
import { Link } from 'next/link'
import { useRouter } from 'next/navigation'

function PrivateRoute({ children }) {

 
const router = useRouter()
 

  const { userIsAuthenticated } = useAuth()
  return userIsAuthenticated() ? children : router.push('/connexion', { scroll: false })
}

export default PrivateRoute