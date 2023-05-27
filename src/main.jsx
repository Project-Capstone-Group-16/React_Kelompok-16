import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: ['Poppins', 'sans-serif'],
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
)
