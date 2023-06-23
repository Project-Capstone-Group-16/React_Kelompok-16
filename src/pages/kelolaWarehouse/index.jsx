import { Form, Pagination } from 'antd'
import React, { useState } from 'react'
import Card from '../../components/kelolaWarehouse/card'
import ModalForm from '../../components/kelolaWarehouse/modalForm'
import LoadingComponent from '../../components/loadingComponent'
import { useGetWarehouses } from './hooks/useWarehouses'
import styles from './styles.module.css'
const KelolaWarehouse = () => {
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState({ mode: null, show: false })
  const [imageUrl, setImageUrl] = React.useState(null)
  const [isLoading, data, getData] = useGetWarehouses()
  const [formState] = Form.useForm()
  const start = (page - 1) * 2
  const end = page * 2
  const handlePaginate = (value) => {
    setPage(value)
  }
  const handleAdd = () => {
    setImageUrl(null)
    setOpen({ mode: 'add', id: null, show: true })
  }
  const handleEdit = (data) => {
    const formValue = {
      name: data?.name,
      city: data?.city,
      address: data?.address,
      description: data?.description,
      image_url: data?.image_url,
    }
    formState.setFieldsValue(formValue)
    setImageUrl(data?.image_url)
    setOpen({ mode: 'edit', id: data?.ID, show: true })
  }
  const refetch = () => {
    getData()
  }

  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div className={styles['container']}>
      <h1 className={styles['heading']}>Kelola Warehouse</h1>
      <button className={styles['add-button']} id="add-button" onClick={handleAdd}>
        Tambah Data
      </button>
      {!!data ? (
        <>
          {data?.data.slice(start, end)?.map((item, idx) => (
            <Card
              data={item}
              key={idx}
              refetch={refetch}
              onEdit={() => {
                handleEdit(item)
              }}
            />
          ))}
          <div className={styles['pagination']}>
            <span className={styles['info-page']}>{`${page} dari ${Math.ceil(data?.data?.length / 2)} halaman`}</span>
            <Pagination defaultCurrent={1} total={data?.data?.length} pageSize={2} onChange={handlePaginate} />
          </div>
        </>
      ) : null}
      {!!isLoading && <LoadingComponent />}
      <ModalForm
        open={open}
        setOpen={setOpen}
        title="Tambah Data Warehouse"
        formState={formState}
        refetch={refetch}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
    </div>
  )
}

export default KelolaWarehouse
