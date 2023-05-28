import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage/LandingPage'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'

const RouteManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login/admin" element={<LoginPage />} />
      <Route path="/register/admin" element={<RegisterPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default RouteManagement
