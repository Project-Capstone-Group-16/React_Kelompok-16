import React from 'react'
import styles from './styles.module.css'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Upload, Button, Form, Modal, Spin, Image } from 'antd'
import { usePostWarehouse, useUpdateWarehouse } from '../../../pages/kelolaWarehouse/hooks/useWarehouses'
import useUploadImage from '../../../pages/kelolaWarehouse/hooks/useUploadImage'
import LoadingComponent from '../../loadingComponent'
const FormModal = ({ open, setOpen, title, formState, refetch, imageUrl, setImageUrl }) => {
  const { TextArea } = Input
  const [isLoadingPost, createData] = usePostWarehouse()
  const [isLoadingUpdate, updateData] = useUpdateWarehouse()
  const [uploadImage, isLoadingImage] = useUploadImage()
  const closeModal = () => {
    setOpen((current) => ({ ...current, show: false }))
    formState.resetFields()
    setImageUrl(null)
  }
  const onFinish = async (values) => {
    if (open.mode === 'add') {
      await createData({ ...values }, refetch)
    } else {
      await updateData(open.id, { ...values }, refetch)
    }
    setOpen((current) => ({ ...current, show: false }))
    formState.resetFields()
  }
  const handleReset = () => {
    formState.resetFields()
    setImageUrl(null)
  }
  const handleSave = () => {
    formState.submit()
  }
  const handleUpload = async (file) => {
    uploadImage(file, (data) => {
      formState.setFieldValue('image_url', data?.url)
      setImageUrl(data?.url)
    })
  }

  React.useEffect(() => {
    const imageInventron = formState.getFieldValue('image_url')
    !!imageInventron && setImageUrl(imageInventron)
  }, [])
  return (
    <>
      <Modal open={open.show} onCancel={closeModal} footer={null} className="modalStyle">
        {!!title && (
          <h4 className={styles['heading']}>{`${open.mode === 'add' ? 'Tambah' : 'Edit'} Data Warehouse`}</h4>
        )}
        <Form
          name="warehouseForm"
          id="warehouseForm"
          form={formState}
          onFinish={onFinish}
          layout="vertical"
          className="warehouseForm"
        >
          <Form.Item
            name="image_url"
            valuePropName="image_url"
            label="Image"
            rules={[{ required: true }]}
            className={styles['upload-field']}
          >
            {!!imageUrl ? (
              <div className={styles['image-container']}>
                <Image src={imageUrl} width={100} height={100} />
                <Button
                  type="link"
                  danger
                  onClick={() => {
                    formState.setFieldValue('image-url', null)
                    setImageUrl(null)
                  }}
                  className={styles['ml20']}
                >
                  Delete Image
                </Button>
              </div>
            ) : (
              <Upload
                showUploadList={false}
                name="file"
                maxCount={1}
                customRequest={() => {}}
                onChange={handleUpload}
                disabled={isLoadingImage}
              >
                <Button icon={<UploadOutlined />}>
                  Upload Foto {!!isLoadingImage && <Spin size="small" style={{ paddingLeft: 10 }} />}
                </Button>
              </Upload>
            )}
          </Form.Item>
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
      {isLoadingPost || isLoadingUpdate ? <LoadingComponent /> : null}
    </>
  )
}

export default FormModal
