import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Row,
  Select,
  Space,
  Spin,
  Upload,
} from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { iconProfile } from '../../assets/icons/admin'
import LoadingComponent from './../../components/loadingComponent/index'
import { useDeleteStaff, useGetStaff, usePostStaff, useUpdateStaff } from './hooks/useStaff'
import useUploadImage from './hooks/useUploadImage'
import { useGetUsers } from './hooks/useUsers'
import styles from './styles.module.css'

const KelolaAkun = () => {
  const { TextArea } = Input
  const [section, setSection] = useState('pengguna')
  const [openModal, setOpenModal] = useState(false)

  const [formStaff] = Form.useForm()
  const [uploadImage, isLoadingImage] = useUploadImage()
  const [isLoadingUsers, dataUsers, getUsers] = useGetUsers()
  const [isLoadingStaff, dataStaff, getStaff] = useGetStaff()
  const [isLoadingCreateStaff, createStaff] = usePostStaff()
  const [isLoadingUpdateStaff, updateStaff] = useUpdateStaff()
  const [isLoadingDeleteStaff, deleteStaff] = useDeleteStaff()

  const [imageUrl, setImageUrl] = useState()
  const [rowData, setRowData] = useState()
  const [isEdit, setIsEdit] = useState(false)

  // Pagination
  const [page, setPage] = useState(1)
  const start = (page - 1) * 2
  const end = page * 2

  const handleChangeRadio = (event) => {
    setSection(event.target.value)
    setPage(1)
  }

  const showModal = () => {
    setOpenModal(true)
  }

  const onCancel = () => {
    setRowData()
    setIsEdit(false)
    formStaff.resetFields()
    setOpenModal(false)
  }

  const onResetInput = () => {
    formStaff.resetFields()
  }

  // handle edit button
  const handleEdit = (row_data) => {
    const formValue = {
      image_url: row_data?.image_url,
      full_name: row_data?.full_name,
      occupation: row_data?.occupation,
      gender: row_data?.gender,
      birth_date: dayjs(row_data?.birth_date, 'YYYY-MM-DD'),
      phone_number: row_data?.phone_number,
      address: row_data?.address,
    }

    setImageUrl(row_data?.image_url)
    formStaff.setFieldsValue(formValue)
    setOpenModal(true)
    setRowData(row_data)
    setIsEdit(true)
  }

  //   Add Data Pegawai
  const onAdd = (values) => {
    createStaff({ ...values, birth_date: dayjs(values.birth_date).format('DD/MM/YYYY') }, () => {
      getStaff()
      formStaff.resetFields()
      setImageUrl()
      setOpenModal(false)
    })

    setTimeout(() => {
      formStaff.resetFields()
      setOpenModal(false)
    }, 500)
  }

  //   Edit Data from table
  const onEdit = (values) => {
    const id = rowData.ID
    const body = {
      ...values,
      birth_date: dayjs(values.birth_date).format('DD/MM/YYYY'),
    }
    updateStaff(id, body, () => {
      getStaff()
      formStaff.resetFields()
      setOpenModal(false)
      setImageUrl()
    })
  }

  const handleUpload = async (file) => {
    uploadImage(file, (data) => {
      formStaff.setFieldValue('image_url', data)
      setImageUrl(data)
    })
  }

  const onDelete = (id) => {
    deleteStaff(id, () => {
      getStaff()
    })
  }

  useEffect(() => {
    getUsers()
    getStaff()
  }, [])

  return (
    <>
      <Radio.Group
        className={styles['radio-group-kelola-akun']}
        onChange={handleChangeRadio}
        defaultValue="pengguna"
        buttonStyle="solid"
        style={{ width: '100%' }}
      >
        <Space size={38}>
          <Radio.Button
            value="pengguna"
            className={
              styles[
                section === 'pengguna' ? 'label-radio-btn-wrapper-custom-active' : 'label-radio-btn-wrapper-custom'
              ]
            }
          >
            Pengguna
          </Radio.Button>
          <Radio.Button
            value="pegawai"
            className={
              styles[section === 'pegawai' ? 'label-radio-btn-wrapper-custom-active' : 'label-radio-btn-wrapper-custom']
            }
          >
            Pegawai
          </Radio.Button>
        </Space>
      </Radio.Group>

      {section === 'pengguna' ? (
        <section id="section-pengguna">
          {isLoadingUsers ? <LoadingComponent /> : null}
          {dataUsers?.slice(start, end)?.map((user) => (
            <Row key={user?.ID} gutter={32} className={styles['row-pengguna']}>
              <Card bordered={true} className={styles['card-data-pengguna']}>
                <Row gutter={[40]} align="middle">
                  <Col span={8}>
                    <Card className={styles['card-profil-pengguna']}>
                      <Image
                        width={150}
                        height={150}
                        className={styles['img-pengguna']}
                        src={user?.image_url ? user.image_url : iconProfile}
                        alt="Profile Penguna"
                      />
                      <p className={styles['username-pengguna']}>{user?.fullname}</p>
                      <p className={styles['histori-pengguna']}>
                        Histori Penyimpanan : <br /> <span>{`${user?.transaction_histroies}x Penyimpanan`}</span>
                      </p>
                    </Card>
                  </Col>
                  <Col span={16}>
                    <p className={styles['card-title-badge']}>Data Pengguna</p>
                    <Form
                      className={styles['form-data-pengguna']}
                      layout="vertical"
                      size="large"
                      initialValues={{
                        fullname: user?.fullname,
                        birth_date: dayjs(user?.birth_date).format('DD/MM/YYYY'),
                        gender: user?.gender,
                        phone_number: user?.phone_number,
                        address: user?.address,
                      }}
                    >
                      <Row gutter={[32]}>
                        <Col span={12}>
                          <Form.Item label="Nama" name="fullname" className={styles['form-label-custom']}>
                            <Input style={{ width: '100%' }} className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Tanggal Lahir" name="birth_date" className={styles['form-label-custom']}>
                            <Input style={{ width: '100%' }} className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={[32]}>
                        <Col span={12}>
                          <Form.Item label="Jenis Kelamin" name="gender" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="No Telepon" name="phone_number" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item label="Alamat" name="address" className={styles['form-label-custom']}>
                        <TextArea className={styles['input-custom']} rows={3} readOnly />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </section>
      ) : (
        <section id="section-pegawai">
          {isLoadingStaff ? <LoadingComponent /> : null}
          <Row>
            <Button className={styles['add-data-btn']} type="primary" size="large" onClick={showModal}>
              Input Data
            </Button>

            <Modal
              className={styles['modal-form']}
              title={isEdit ? 'Ubah Data Warehouse' : 'Tambah Data Warehouse'}
              open={openModal}
              width={627}
              onOk={formStaff.submit}
              onCancel={onCancel}
              footer={
                isEdit ? (
                  <Row justify="space-between">
                    <Button
                      key="reset"
                      type="primary"
                      onClick={onResetInput}
                      className={styles['reset-btn']}
                      size="middle"
                    >
                      Reset
                    </Button>

                    <Button
                      key="submit"
                      htmlType="submit"
                      type="primary"
                      className={styles['submit-btn']}
                      size="middle"
                      onClick={formStaff.submit}
                      loading={isLoadingUpdateStaff}
                    >
                      Simpan Perubahan
                    </Button>
                  </Row>
                ) : (
                  <Row justify="space-between">
                    <Button key="reset" type="primary" onClick={onCancel} size="middle" danger>
                      Cancel
                    </Button>

                    <Button
                      key="submit"
                      htmlType="submit"
                      type="primary"
                      className={styles['submit-btn']}
                      size="middle"
                      onClick={formStaff.submit}
                      loading={isLoadingCreateStaff}
                    >
                      Submit
                    </Button>
                  </Row>
                )
              }
              centered
            >
              <Form
                className={styles['form-data-warehouse']}
                name="formStaff"
                form={formStaff}
                onFinish={isEdit ? onEdit : onAdd}
                layout="vertical"
                size="large"
                scrollToFirstError={true}
              >
                <Form.Item label="Upload Foto" name="image_url">
                  {!!imageUrl ? (
                    <div className={styles['image-container']}>
                      <Image src={imageUrl} width={100} height={100} />
                      <Button
                        type="link"
                        danger
                        onClick={() => {
                          formStaff.setFieldValue('image-url', null)
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

                <Form.Item
                  label="Nama"
                  name="full_name"
                  rules={[
                    {
                      required: true,
                      message: 'Masukkan nama lengkap Anda.',
                    },
                    {
                      max: 100,
                      message: 'Tidak boleh melebihi 100 huruf',
                    },
                    {
                      whitespace: true,
                      message: 'Tidak boleh dimulai dengan spasi',
                    },
                  ]}
                >
                  <Input placeholder="Silahkan mengisi nama lengkap Anda" />
                </Form.Item>

                <Form.Item
                  label="Jabatan"
                  name="occupation"
                  rules={[
                    {
                      required: true,
                      message: 'Silahkan pilih jabatan Anda',
                    },
                  ]}
                >
                  <Select
                    id="occupation"
                    placeholder="Pilih Jabatan"
                    options={[
                      { value: 'Manager', label: 'Manager' },
                      { value: 'PIC', label: 'PIC' },
                      { value: 'Akuntan', label: 'Akuntan' },
                      { value: 'CS', label: 'CS' },
                      { value: 'Direktur', label: 'Direktur' },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label="Jenis Kelamin"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: 'Silahkan pilih jenis kelamin Anda',
                    },
                  ]}
                >
                  <Select
                    placeholder="Pilih Jenis Kelamin"
                    getPopupContainer={(trigger) => trigger.parentElement}
                    options={[
                      { value: 'Pria', label: 'Pria' },
                      { value: 'Wanita', label: 'Wanita' },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label="Tanggal Lahir"
                  name="birth_date"
                  rules={[{ required: true, message: 'Anda belum mengisi tanggal lahir' }]}
                >
                  <DatePicker placeholder="Silahkan mengisi tanggal lahir Anda" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  label="No Telepon"
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: 'Masukkan No Telepon',
                    },
                    {
                      whitespace: true,
                      message: 'Tidak boleh diawali spasi',
                    },
                    { max: 11, message: 'Maksimal 11 digit' },
                  ]}
                >
                  <Input placeholder="Silahkan mengisi nomor telepon Anda" addonBefore="+62" />
                </Form.Item>

                <Form.Item
                  label="Alamat"
                  name="address"
                  rules={[{ required: true, message: 'Anda belum mengisi alamat' }]}
                >
                  <Input.TextArea rows={2} showCount maxLength={250} placeholder="Silahkan mengisi alamat Anda" />
                </Form.Item>
              </Form>
            </Modal>
          </Row>
          {dataStaff?.slice(start, end)?.map((staff) => (
            <Row key={staff?.ID} gutter={32} className={styles['row-pegawai']}>
              <Card bordered={true} className={styles['card-data-pegawai']}>
                <Row gutter={[40]} align="middle">
                  <Col span={8}>
                    <Card className={styles['card-profil-pegawai']}>
                      <Image
                        className={styles['img-pegawai']}
                        src={staff?.image_url ? staff?.image_url : iconProfile}
                        width={150}
                        height={150}
                      />
                      <p className={styles['username-pegawai']}>{staff?.full_name}</p>
                    </Card>
                  </Col>

                  <Col span={16}>
                    <Form
                      className={styles['form-data-pegawai']}
                      layout="vertical"
                      size="large"
                      initialValues={{
                        full_name: staff?.full_name,
                        occupation: staff?.occupation,
                        gender: staff?.gender,
                        birth_date: dayjs(staff?.birth_date).format('DD/MM/YYYY'),
                        phone_number: `0${staff?.phone_number}`,
                        address: staff?.address,
                      }}
                    >
                      <Row gutter={[24]}>
                        <Col span={12}>
                          <Form.Item label="Nama" name="full_name" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Jabatan" name="occupation" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={[24]}>
                        <Col span={6}>
                          <Form.Item label="Jenis Kelamin" name="gender" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={9}>
                          <Form.Item label="Tanggal Lahir" name="birth_date" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={9}>
                          <Form.Item label="No Telepon" name="phone_number" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={[24]} align="middle">
                        <Col span={20}>
                          <Form.Item label="Alamat" name="address" className={styles['form-label-custom']}>
                            <TextArea className={styles['input-custom']} rows={3} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={4}>
                          <Space className={styles['action-card']} direction="vertical">
                            <Button
                              className={styles['btn-ubah']}
                              type="primary"
                              onClick={() => {
                                handleEdit(staff)
                              }}
                              block
                            >
                              Ubah
                            </Button>

                            <Popconfirm
                              title="Yakin ingin dihapus?"
                              arrow={false}
                              onConfirm={() => {
                                onDelete(staff.ID)
                              }}
                              loading={isLoadingDeleteStaff}
                            >
                              <Button className={styles['btn-hapus']} type="primary" danger block>
                                Hapus
                              </Button>
                            </Popconfirm>
                          </Space>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </section>
      )}

      <div className={styles['pagination-wrap']}>
        <Pagination
          current={page}
          onChange={(value) => {
            setPage(value)
          }}
          defaultCurrent={1}
          total={section === 'pengguna' ? dataUsers?.length : dataStaff?.length}
          pageSize={2}
          showTotal={(total) => `${page} dari ${Math.ceil(total / 2)} halaman`}
          showSizeChanger={false}
        />
      </div>
    </>
  )
}

export default KelolaAkun
