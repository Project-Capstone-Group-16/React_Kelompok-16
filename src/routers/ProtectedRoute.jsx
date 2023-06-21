import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = ({ Auth, redirectPath = '/', children }) => {
  const token = Cookies.get('token')
  const notAllowed = Auth ? !token : !!token
  if (notAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
}
export default ProtectedRoute
