import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { iconProfile } from '../../assets/icons/admin'
import LoadingComponent from './../../components/loadingComponent/index'
import Diagram from './diagram'
import { useDashboard } from './hooks/useDashboard'
import Loker from './loker'
import Persentasi from './persentasi'
import styles from './styles.module.css'
import { useWarehouse } from './hooks/useWarehouse'

const Dashboard = () => {
  const [isLoadingDashboard, dataDashboard, getDataDashboard] = useDashboard()
  const [isLoadingWarehouse, dataWarehouse, getDataWarehouse] = useWarehouse()
  // console.log(dataWarehouse)
  useEffect(() => {
    getDataDashboard()
    getDataWarehouse()
  }, [])
  return (
    <>
      {isLoadingDashboard && isLoadingWarehouse ? <LoadingComponent /> : null}
      <div className={styles['container-dashboard']}>
        <Row className={styles['header']}>
          <h1>Dashboard</h1>
          <span className={styles['icon-profile']}>
            <img src={iconProfile} alt="icon-profile" />
            <p>Admin 1</p>
          </span>
        </Row>
        <Row className={styles['content']}>
          <Col className={styles['content-left']} span={18}>
            <Row className={styles['container-content-left']}>
              <Col className={styles['persentasi']} span={12}>
                <Persentasi data={dataDashboard} />
              </Col>
              <Col className={styles['diagram']} span={12}>
                <Diagram data={dataDashboard} />
              </Col>
            </Row>
          </Col>
          <Col className={styles['content-right']} span={6}>
            <Loker data={dataWarehouse} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard
