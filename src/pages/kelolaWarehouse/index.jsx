import React, { useState } from 'react'
import styles from './styles.module.css'
import Card from '../../components/kelolaWarehouse/card'
import ModalForm from '../../components/kelolaWarehouse/modalForm'
import { data } from './constanst'
import { Pagination, Form } from 'antd'
const KelolaWarehouse = () => {
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState({ mode: null, show: false })
  const [formState] = Form.useForm()
  const start = (page - 1) * 2
  const end = page * 2
  const handlePaginate = (value) => {
    setPage(value)
  }
  const handleAdd = () => {
    setOpen({ mode: 'add', show: true })
  }
  const handleEdit = (data) => {
    const { lokerList, ...restData } = data
    formState.setFieldsValue(restData)
    setOpen({ mode: 'edit', show: true })
  }
  return (
    <div className={styles['container']}>
      <h1 className={styles['heading']}>Kelola Warehouse</h1>
      <button className={styles['add-button']} id="add-button" onClick={handleAdd}>
        Tambah Data
      </button>
      {data?.slice(start, end)?.map((item, idx) => (
        <Card
          data={item}
          key={idx}
          onEdit={() => {
            handleEdit(item)
          }}
        />
      ))}
      <div className={styles['pagination']}>
        <span className={styles['info-page']}>{`${page * 2 - 1}-${page * 2} dari ${data?.length} Data`}</span>
        <Pagination defaultCurrent={1} total={data?.length} pageSize={2} onChange={handlePaginate} />
      </div>
      <ModalForm open={open} setOpen={setOpen} title="Tambah Data Warehouse" formState={formState} />
    </div>
  )
}

export default KelolaWarehouse
