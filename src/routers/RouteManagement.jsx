import React, { Suspense } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoadingComponent from '../components/loadingComponent'
import LandingPage from '../pages/landingPage/LandingPage'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'

const RouteManagement = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login') || navigate('/register')
  //   }
  // }, [token, navigate])

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/admin" element={<h1>Admin</h1>} />
        </Routes>
      )}
    </Suspense>
  )
}

export default RouteManagement
