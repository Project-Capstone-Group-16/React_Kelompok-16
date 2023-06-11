import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Area } from '@ant-design/charts'

const Diagram = () => {
  const [data, setData] = useState([
    {
      timePeriod: 'Jan',
      value: 3,
    },
    {
      timePeriod: 'Feb',
      value: 4,
    },
    {
      timePeriod: 'Mar',
      value: 3.5,
    },
    {
      timePeriod: 'Apr',
      value: 5,
    },
    {
      timePeriod: 'May',
      value: 4.9,
    },
    {
      timePeriod: 'Jun',
      value: 6,
    },
    {
      timePeriod: 'Jul',
      value: 7,
    },
    {
      timePeriod: 'Aug',
      value: 9,
    },
    {
      timePeriod: 'Sep',
      value: 13,
    },
    {
      timePeriod: 'Oct',
      value: 15,
    },
    {
      timePeriod: 'Nov',
      value: 17,
    },
    {
      timePeriod: 'Dec',
      value: 18,
    },
  ])
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    height: 300,
    smooth: true,
    areaStyle: function areaStyle() {
      return { fill: '#1890ff' }
    },
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  }

  return (
    <div className={styles['container-diagram']}>
      <p className={styles['title-diagram']}>Total Loker Terpakai</p>
      <Area {...config} />
    </div>
  )
}

export default Diagram
