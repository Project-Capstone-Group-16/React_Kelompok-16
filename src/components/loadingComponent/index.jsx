import { Spin } from 'antd'
import React from 'react'
import styles from './style.module.css'

const LoadingComponent = () => {
  return (
    <div className={styles['loading']}>
      <Spin size="large" tip="Loading..." />
    </div>
  )
}

export default LoadingComponent
