import React, { useState } from 'react'
import {
  Row,
  Col,
  Space,
  Radio,
  Card,
  Avatar,
  Form,
  Input,
  DatePicker,
  Select,
  Pagination,
  Button,
  Modal,
  Upload,
  message,
} from 'antd'
import { EnvironmentFilled, UploadOutlined } from '@ant-design/icons'
import { DATA_PENGGUNA, DATA_PEGAWAI } from './constanst'
import styles from './styles.module.css'

const KelolaAkun = () => {
  const { TextArea } = Input
  const [formDataWarehouse] = Form.useForm()
  const [section, setSection] = useState('pengguna')
  const [openModal, setOpenModal] = useState(false)
  const [rowData, setRowData] = useState()
  const [isEdit, setIsEdit] = useState(false)

  // Regex Validasi
  const phoneNumberRegex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/

  const handleChangeRadio = (event) => {
    setSection(event.target.value)
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
    alert(
      `Data berhasil ditambah \n nama : ${values.nama} \n jabatan : ${values.jabatan} \n Jenis Kelamin : ${values.jenis_kelamin} \n Tanggal Lahir : ${values.tanggal_lahir} \n No telepon : ${values.no_telepon} \n Alamat : ${values.alamat}`
    )

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
          {DATA_PENGGUNA?.map((data, index) => (
            <Row key={index} gutter={32} className={styles['row-pengguna']}>
              <Card bordered={true} className={styles['card-data-pengguna']}>
                <Row gutter={[40]} align="middle">
                  <Col span={8}>
                    <Card className={styles['card-profil-pengguna']}>
                      <Avatar className={styles['img-pengguna']} shape="circle" size={90} src={data?.foto_profil} />
                      <p className={styles['username-pengguna']}>{data?.nama}</p>

                      <p className={styles['histori-pengguna']}>
                        Histori Penyimpanan : <br /> <span>{`${data?.histori_penyimpanan}x Penyimpanan`}</span>
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
                        nama: data?.nama,
                        tanggal_lahir: data?.tanggal_lahir,
                        jenis_kelamin: data?.jenis_kelamin,
                        no_telepon: data?.no_telepon,
                        alamat: data?.alamat,
                      }}
                    >
                      <Row gutter={[32]}>
                        <Col span={12}>
                          <Form.Item label="Nama" name="nama" className={styles['form-label-custom']}>
                            <Input style={{ width: '100%' }} className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Tanggal Lahir" name="tanggal_lahir" className={styles['form-label-custom']}>
                            <Input style={{ width: '100%' }} className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={[32]}>
                        <Col span={12}>
                          <Form.Item label="Jenis Kelamin" name="jenis_kelamin" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="No Telepon" name="no_telepon" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Form.Item label="Alamat" name="alamat" className={styles['form-label-custom']}>
                        <TextArea className={styles['input-custom']} rows={3} readOnly />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}

          <div className={styles['pagination-wrap']}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
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

          {DATA_PEGAWAI?.map((data, index) => (
            <Row key={index} gutter={32} className={styles['row-pegawai']}>
              <Card bordered={true} className={styles['card-data-pegawai']}>
                <Row gutter={[40]} align="middle">
                  <Col span={8}>
                    <Card className={styles['card-profil-pegawai']}>
                      <Avatar className={styles['img-pegawai']} shape="circle" size={150} src={data?.foto_profil} />
                      <p className={styles['username-pegawai']}>{data?.nama}</p>
                    </Card>
                  </Col>

                  <Col span={16}>
                    <Form
                      className={styles['form-data-pegawai']}
                      layout="vertical"
                      size="large"
                      initialValues={{
                        nama: data?.nama,
                        jabatan: data?.jabatan,
                        jenis_kelamin: data?.jenis_kelamin,
                        tanggal_lahir: data?.tanggal_lahir,
                        no_telepon: data?.no_telepon,
                        alamat: data?.alamat,
                      }}
                    >
                      <Row gutter={[24]}>
                        <Col span={12}>
                          <Form.Item label="Nama" name="nama" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Jabatan" name="jabatan" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={[24]}>
                        <Col span={6}>
                          <Form.Item label="Jenis Kelamin" name="jenis_kelamin" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={9}>
                          <Form.Item label="Tanggal Lahir" name="tanggal_lahir" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>

                        <Col span={9}>
                          <Form.Item label="No Telepon" name="no_telepon" className={styles['form-label-custom']}>
                            <Input className={styles['input-custom']} readOnly />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={[24]} align="middle">
                        <Col span={20}>
                          <Form.Item label="Alamat" name="alamat" className={styles['form-label-custom']}>
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

          <div className={styles['pagination-wrap']}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </section>
      )}
    </>
  )
}

export default KelolaAkun
