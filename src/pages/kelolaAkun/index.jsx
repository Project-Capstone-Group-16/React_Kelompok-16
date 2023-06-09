import React, { useState } from 'react'
import { Row, Col, Space, Radio, Card, Avatar, Form, Input, DatePicker, Select, Pagination } from 'antd'
import styles from './styles.module.css'

const KelolaAkun = () => {
  const [section, setSection] = useState('pengguna')

  const handleChangeRadio = (event) => {
    setSection(event.target.value)
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
          <Row gutter={32} className={styles['row-pengguna']}>
            <Card bordered={true} className={styles['card-data-pengguna']}>
              <Row gutter={[40]} align="middle">
                <Col span={8}>
                  <Card className={styles['card-profil-pengguna']}>
                    <Avatar
                      className={styles['img-pengguna']}
                      shape="circle"
                      size={90}
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <p className={styles['username-pengguna']}>Username Pengguna</p>

                    <p className={styles['histori-pengguna']}>
                      Histori Penyimpanan : <br /> <span>2x Penyimpanan</span>
                    </p>
                  </Card>
                </Col>

                <Col span={16}>
                  <p className={styles['card-title-badge']}>Data Pengguna</p>

                  <Form className={styles['form-data-pengguna']} layout="vertical">
                    <Row gutter={[32]}>
                      <Col span={12}>
                        <Form.Item label="Nama" name="nama">
                          <Input style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item label="Tanggal Lahir" name="tanggal-lahir">
                          <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={[32]}>
                      <Col span={12}>
                        <Form.Item label="Jenis Kelamin" name="jenis-kelamin">
                          <Select
                            defaultValue="lucy"
                            options={[
                              { value: 'pria', label: 'pria' },
                              { value: 'wanita', label: 'wanita' },
                            ]}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item label="No Telepon">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item label="Alamat" name="alamat">
                      <Input.TextArea rows={4} showCount maxLength={250} />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Row>

          <Row gutter={32} className={styles['row-pengguna']}>
            <Card bordered={true} className={styles['card-data-pengguna']}>
              <Row gutter={[40]} align="middle">
                <Col span={8}>
                  <Card className={styles['card-profil-pengguna']}>
                    <Avatar
                      className={styles['img-pengguna']}
                      shape="circle"
                      size={90}
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <p className={styles['username-pengguna']}>Username Pengguna</p>

                    <p className={styles['histori-pengguna']}>
                      Histori Penyimpanan : <br /> <span>2x Penyimpanan</span>
                    </p>
                  </Card>
                </Col>

                <Col span={16}>
                  <p className={styles['card-title-badge']}>Data Pengguna</p>

                  <Form className={styles['form-data-pengguna']} layout="vertical">
                    <Row gutter={[32]}>
                      <Col span={12}>
                        <Form.Item label="Nama" name="nama">
                          <Input style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item label="Tanggal Lahir" name="tanggal-lahir">
                          <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={[32]}>
                      <Col span={12}>
                        <Form.Item label="Jenis Kelamin" name="jenis-kelamin">
                          <Select
                            defaultValue="lucy"
                            options={[
                              { value: 'pria', label: 'pria' },
                              { value: 'wanita', label: 'wanita' },
                            ]}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item label="No Telepon">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item label="Alamat" name="alamat">
                      <Input.TextArea rows={4} showCount maxLength={250} />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Row>

          <div className={styles['pagination-wrap']}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </section>
      ) : (
        <section id="section-pegawai"></section>
      )}
    </>
  )
}

export default KelolaAkun
