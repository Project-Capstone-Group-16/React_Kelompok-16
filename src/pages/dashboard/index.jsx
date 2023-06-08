import React from 'react'
import styles from './styles.module.css'
import { iconProfile } from '../../assets/icons/admin'
import { Col, Row } from 'antd'
import Persentasi from './persentasi'
import Diagram from './diagram'
import Loker from './loker'

const Dashboard = () => {
  return (
    <>
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
                <Persentasi />
              </Col>
              <Col className={styles['diagram']} span={12}>
                <Diagram />
              </Col>
            </Row>
          </Col>
          <Col
            className={styles['content-right']}
            style={{
              backgroundColor: 'red',
            }}
            span={6}
          >
            <Loker />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard
