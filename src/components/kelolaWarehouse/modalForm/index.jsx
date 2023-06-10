import React from 'react'
import styles from './styles.module.css'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Upload, Button, Form, Modal } from 'antd'
const FormModal = ({ open, setOpen, title, formState }) => {
  const { TextArea } = Input
  const closeModal = () => {
    setOpen((current) => ({ ...current, show: false }))
    formState.resetFields()
  }
  const onFinish = (values) => {
    setOpen((current) => ({ ...current, show: false }))
    console.log(values)
    formState.resetFields()
  }
  const handleReset = () => {
    formState.resetFields()
  }
  const handleSave = () => {
    formState.submit()
  }
  return (
    <Modal open={open.show} onCancel={closeModal} footer={null} className="modalStyle">
      {!!title && <h4 className={styles['heading']}>{`${open.mode === 'add' ? 'Tambah' : 'Edit'} Data Warehouse`}</h4>}
      <Form
        name="warehouseForm"
        id="warehouseForm"
        form={formState}
        onFinish={onFinish}
        layout="vertical"
        className="warehouseForm"
      >
        <div className={styles['upload-image']}>
          <label className={styles['upload-label']}>Input Foto</label>
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Foto</Button>
          </Upload>
        </div>
        <Form.Item label="Nama" name="name" className={styles['field-container']} rules={[{ required: true }]}>
          <Input placeholder="Masukan Nama Warehouse" className={styles['input']} />
        </Form.Item>
        <Form.Item label="Kota" name="city" className={styles['field-container']} rules={[{ required: true }]}>
          <Input placeholder="Masukan Kota" className={styles['input']} />
        </Form.Item>
        <Form.Item label="Alamat" name="address" className={styles['field-container']} rules={[{ required: true }]}>
          <Input placeholder="Masukan Alamat" className={styles['input']} />
        </Form.Item>
        <Form.Item
          label="Deskripsi"
          name="description"
          className={styles['field-container']}
          rules={[{ required: true }]}
        >
          <TextArea
            placeholder="Silahkan mengisi deskripsi terkait cabang Inventron"
            rows={4}
            className={styles['input']}
          />
        </Form.Item>
      </Form>
      <div className={styles['buttons']}>
        <button className={styles['reset-button']} id="reset-button" onClick={handleReset}>
          Reset
        </button>
        <button className={styles['save-button']} id="save-button" onClick={handleSave}>
          Simpan Perubahan
        </button>
      </div>
    </Modal>
  )
}

export default FormModal
