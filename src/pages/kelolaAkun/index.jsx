import React, { useState, useEffect } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Pagination,
  Radio,
  Row,
  Select,
  Space,
  Upload,
} from 'antd'
import { DATA_PEGAWAI, DATA_PENGGUNA } from './constanst'
import { useGetUsers } from './hooks/useUsers'
import { useGetStaff, usePostStaff } from './hooks/useStaff'
import styles from './styles.module.css'

const KelolaAkun = () => {
  const { TextArea } = Input
  const [section, setSection] = useState('pengguna')
  const [openModal, setOpenModal] = useState(false)

  const [formDataWarehouse] = Form.useForm()
  const [isLoadingUsers, dataUsers, getUsers] = useGetUsers()
  const [isLoadingStaff, dataStaff, getStaff] = useGetStaff()
  const [isLoadingCreateStaff, createStaff] = usePostStaff()

  const [rowData, setRowData] = useState()
  const [isEdit, setIsEdit] = useState(false)

  // Pagination
  const [page, setPage] = useState(1)
  const start = (page - 1) * 2
  const end = page * 2

  // Regex Validasi
  const phoneNumberRegex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/

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
    formDataWarehouse.resetFields()
    setOpenModal(false)
  }

  const onResetInput = () => {
    formDataWarehouse.resetFields()
  }

  // handle edit button
  const handleEdit = (row_data) => {
    setOpenModal(true)
    setRowData(row_data)
    setIsEdit(true)
    formDataWarehouse.setFieldsValue({
      nama: row_data.nama,
      jabatan: row_data.jabatan,
      jenis_kelamin: row_data.jenis_kelamin,
      tanggal_lahir: row_data.tanggal_lahir,
      no_telepon: row_data.no_telepon,
      alamat: row_data.alamat,
    })
  }

  //   Add Data Pegawai
  const onAdd = (values) => {
    createStaff(values, () => {
      getStaff()
      formDataWarehouse.resetFields()
    })

    setTimeout(() => {
      formDataWarehouse.resetFields()
      setOpenModal(false)
    }, 500)
  }

  //   Edit Data from table
  const onEdit = (values) => {
    const body = {
      ...values,
    }

    console.log(body)
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
          {dataUsers?.slice(start, end)?.map((user) => (
            <Row key={user?.id} gutter={32} className={styles['row-pengguna']}>
              <Card bordered={true} className={styles['card-data-pengguna']}>
                <Row gutter={[40]} align="middle">
                  <Col span={8}>
                    <Card className={styles['card-profil-pengguna']}>
                      <Avatar className={styles['img-pengguna']} shape="circle" size={90} src={user?.image_url} />
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
                        birth_date: user?.birth_date,
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
          <Row>
            <Button className={styles['add-data-btn']} type="primary" size="large" onClick={showModal}>
              Input Data
            </Button>

            <Modal
              className={styles['modal-form']}
              title="Tambah Data Warehouse"
              open={openModal}
              footer={
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

                  <Button key="submit" type="primary" className={styles['submit-btn']} size="middle">
                    {isEdit ? 'Simpan Perubahan' : 'Submit'}
                  </Button>
                </Row>
              }
              onCancel={onCancel}
              width={627}
              centered
            >
              <Form
                className={styles['form-data-warehouse']}
                name="form-data-warehouse"
                form={formDataWarehouse}
                onFinish={isEdit ? onEdit : onAdd}
                layout="vertical"
                size="large"
              >
                <Form.Item label="Upload Foto">
                  <Upload>
                    <Button icon={<UploadOutlined />}>Klik untuk Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  label="Nama"
                  name="nama"
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
                  name="jabatan"
                  rules={[
                    {
                      required: true,
                      message: 'Silahkan pilih jabatan Anda',
                    },
                  ]}
                >
                  <Select
                    defaultValue="Pilih Jabatan"
                    options={[
                      { value: 'Manajer', label: 'Manajer' },
                      { value: 'PIC', label: 'PIC' },
                      { value: 'Akuntan', label: 'Akuntan' },
                      { value: 'CS', label: 'CS' },
                      { value: 'Direktur', label: 'Direktur' },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label="Jenis Kelamin"
                  name="jenis_kelamin"
                  rules={[
                    {
                      required: true,
                      message: 'Silahkan pilih jenis kelamin Anda',
                    },
                  ]}
                >
                  <Select
                    defaultValue="Pilih Jenis Kelamin"
                    options={[
                      { value: 'pria', label: 'pria' },
                      { value: 'wanita', label: 'wanita' },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label="Tanggal Lahir"
                  name="tanggal_lahir"
                  rules={[{ required: true, message: 'Anda belum mengisi tanggal lahir' }]}
                >
                  <DatePicker placeholder="Silahkan mengisi tanggal lahir Anda" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  label="No Telepon"
                  name="no_telepon"
                  rules={[
                    {
                      required: true,
                      message: 'Masukkan No Telepon',
                    },
                    {
                      pattern: phoneNumberRegex,
                      message: 'No Handphone tidak valid',
                    },
                    {
                      whitespace: true,
                      message: 'Tidak boleh diawali spasi',
                    },
                  ]}
                >
                  <Input placeholder="Silahkan mengisi nomor telepon Anda" />
                </Form.Item>

                <Form.Item
                  label="Alamat"
                  name="alamat"
                  rules={[{ required: true, message: 'Anda belum mengisi alamat' }]}
                >
                  <Input.TextArea rows={2} showCount maxLength={250} placeholder="Silahkan mengisi alamat Anda" />
                </Form.Item>
              </Form>
            </Modal>
          </Row>

          {dataStaff?.slice(start, end)?.map((staff) => (
            <Row key={staff?.id} gutter={32} className={styles['row-pegawai']}>
              <Card bordered={true} className={styles['card-data-pegawai']}>
                <Row gutter={[40]} align="middle">
                  <Col span={8}>
                    <Card className={styles['card-profil-pegawai']}>
                      <Avatar className={styles['img-pegawai']} shape="circle" size={150} src={staff?.image_url} />
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
                        birth_date: staff?.birth_date,
                        phone_number: staff?.phone_number,
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
                            <Button className={styles['btn-ubah']} type="primary" onClick={handleEdit} block>
                              Ubah
                            </Button>
                            <Button className={styles['btn-hapus']} type="primary" danger block>
                              Hapus
                            </Button>
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
