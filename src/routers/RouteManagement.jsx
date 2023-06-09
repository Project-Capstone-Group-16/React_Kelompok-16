import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutComponent from '../components/layout/LayoutComponent'
import LoadingComponent from '../components/loadingComponent'
import Dashboard from '../pages/dashboard'
import KelolaAkun from '../pages/kelolaAkun'
import KelolaBarang from '../pages/kelolaBarang'
import KelolaTransaksi from '../pages/kelolaTransaksi'
import KelolaWarehouse from '../pages/kelolaWarehouse'
import LandingPage from '../pages/landingPage/LandingPage'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'

const RouteManagement = () => {
  const token = localStorage.getItem('token')

  return (
    <Suspense fallback={<LoadingComponent />}>
      {token ? (
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
            <Route path="/kelola-warehouse" element={<KelolaWarehouse />} />
            <Route path="/kelola-barang" element={<KelolaBarang />} />
            <Route path="/kelola-akun" element={<KelolaAkun />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  )
}

export default RouteManagement
