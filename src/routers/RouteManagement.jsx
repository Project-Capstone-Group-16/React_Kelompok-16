import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LayoutComponent from '../components/layout/LayoutComponent'
import LoadingComponent from '../components/loadingComponent'
import LandingPage from '../pages/landingPage/LandingPage'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'
import Dashboard from '../pages/dashboard'
import KelolaTransaksi from '../pages/kelolaTransaksi'
import KelolaBarang from '../pages/kelolaBarang'
import KelolaUser from '../pages/kelolaUser'

const RouteManagement = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [token, navigate])

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
        <LayoutComponent>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kelola-transaksi" element={<KelolaTransaksi />} />
            <Route path="/kelola-barang" element={<KelolaBarang />} />
            <Route path="/kelola-user" element={<KelolaUser />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  )
}

export default RouteManagement
