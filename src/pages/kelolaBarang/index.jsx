import React from 'react'

import { Button, Card, Image, Pagination, Row, Space, Tag, Typography } from 'antd'

import styles from './styles.module.css'

const KelolaBarang = () => {
  return (
    <section className={styles['kelola__barang']}>
      <Typography.Title level={1} className={styles['outer__title']} id="outer__title">
        Kelola Barang
      </Typography.Title>

      <Card className={styles['card__outer']} bodyStyle={{ padding: '22px 14px' }} id="card__outer">
        <Tag className={styles['tag__barang']} id="tag__barang">
          Barang 1
        </Tag>

        <Row>
          <Card className={styles['card__inner__left']} style={{ marginRight: 24 }} id="card__inner__left">
            <Row style={{ gap: 10 }} align="middle" justify="center">
              <Image
                width={112}
                height={121}
                style={{ borderRadius: 8 }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={false}
                id="image__barang"
              />
              <Card
                className={styles['card__name']}
                bodyStyle={{ height: '100%', width: '100%', padding: '32px 16px' }}
                id="card__name"
              >
                <Typography.Text className={styles['weight__barang__title']} id="text__title">
                  Nama Barang&nbsp;:
                </Typography.Text>
                <Typography.Paragraph ellipsis className={styles['text__barang__name']} id="text__barang__name">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, labore?
                </Typography.Paragraph>
              </Card>
              <Row style={{ flexDirection: 'column', rowGap: 4 }} align="middle">
                <Card
                  bodyStyle={{ padding: 0, height: '100%', width: '100%' }}
                  className={styles['card__size']}
                  id="card__size"
                >
                  <Typography.Text className={styles['text__size__title']} id="text__size__title">
                    Ukuran Barang&nbsp;:
                  </Typography.Text>
                  <Typography.Paragraph ellipsis className={styles['text__size__name']} id="text__size__name">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, recusandae.
                  </Typography.Paragraph>
                </Card>
                <Card
                  bodyStyle={{ padding: 0, height: '100%', width: '100%' }}
                  className={styles['card__weight']}
                  id="card__weight"
                >
                  <Typography.Text className={styles['text__weight__title']} id="text__weight__title">
                    Berat Barang&nbsp;:
                  </Typography.Text>
                  <Typography.Paragraph ellipsis className={styles['text__weight__name']} id="text__weight__name">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ex.
                  </Typography.Paragraph>
                </Card>
              </Row>
            </Row>
            <Space style={{ marginTop: 24 }} size="large">
              <Button
                className={`${styles['btn__action']} ${styles['btn__action--service']}`}
                id="btn__service"
                type="ghost"
              >
                Self Service
              </Button>
              <Button
                className={`${styles['btn__action']} ${styles['btn__action--pickup']}`}
                id="btn__pickup"
                type="ghost"
              >
                Pick Up
              </Button>
            </Space>
          </Card>
          <Card className={styles['card__inner__right']} id="card__inner__right">
            <Row style={{ gap: 10 }} align="middle" justify="center">
              <Image
                width={143}
                height={203}
                style={{ borderRadius: 8 }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={false}
                id="image__barang"
              />
              <Card
                className={styles['card__detail']}
                bodyStyle={{ height: '100%', width: '100%', padding: '10px 16px', overflowY: 'scroll' }}
                id="card__detail"
              >
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Warehouse
                </Typography.Title>
                <Typography.Paragraph ellipsis className={styles['detail__value']} id="detail__value">
                  Inventron Semarang
                </Typography.Paragraph>
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Kategori
                </Typography.Title>
                <Typography.Paragraph ellipsis className={styles['detail__value']} id="detail__value">
                  M-17
                </Typography.Paragraph>
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Waktu Check In
                </Typography.Title>
                <Typography.Paragraph className={styles['detail__value']} id="detail__value">
                  Rabu, 03 Mei 2023
                </Typography.Paragraph>
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Waktu Check Out
                </Typography.Title>
                <Typography.Paragraph className={styles['detail__value']} id="detail__value">
                  Minggu , 07 Mei 2023
                </Typography.Paragraph>
              </Card>
            </Row>
          </Card>
        </Row>
      </Card>
      <Card className={styles['card__outer']} bodyStyle={{ padding: '22px 14px' }} id="card__outer">
        <Tag className={styles['tag__barang']} id="tag__barang">
          Barang 1
        </Tag>

        <Row>
          <Card className={styles['card__inner__left']} style={{ marginRight: 24 }} id="card__inner__left">
            <Row style={{ gap: 10 }} align="middle" justify="center">
              <Image
                width={112}
                height={121}
                style={{ borderRadius: 8 }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={false}
                id="image__barang"
              />
              <Card
                className={styles['card__name']}
                bodyStyle={{ height: '100%', width: '100%', padding: '32px 16px' }}
                id="card__name"
              >
                <Typography.Text className={styles['weight__barang__title']} id="text__title">
                  Nama Barang&nbsp;:
                </Typography.Text>
                <Typography.Paragraph ellipsis className={styles['text__barang__name']} id="text__barang__name">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, labore?
                </Typography.Paragraph>
              </Card>
              <Row style={{ flexDirection: 'column', rowGap: 4 }} align="middle">
                <Card
                  bodyStyle={{ padding: 0, height: '100%', width: '100%' }}
                  className={styles['card__size']}
                  id="card__size"
                >
                  <Typography.Text className={styles['text__size__title']} id="text__size__title">
                    Ukuran Barang&nbsp;:
                  </Typography.Text>
                  <Typography.Paragraph ellipsis className={styles['text__size__name']} id="text__size__name">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, recusandae.
                  </Typography.Paragraph>
                </Card>
                <Card
                  bodyStyle={{ padding: 0, height: '100%', width: '100%' }}
                  className={styles['card__weight']}
                  id="card__weight"
                >
                  <Typography.Text className={styles['text__weight__title']} id="text__weight__title">
                    Berat Barang&nbsp;:
                  </Typography.Text>
                  <Typography.Paragraph ellipsis className={styles['text__weight__name']} id="text__weight__name">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ex.
                  </Typography.Paragraph>
                </Card>
              </Row>
            </Row>
            <Space style={{ marginTop: 24 }} size="large">
              <Button
                className={`${styles['btn__action']} ${styles['btn__action--service']}`}
                id="btn__service"
                type="ghost"
              >
                Self Service
              </Button>
              <Button
                className={`${styles['btn__action']} ${styles['btn__action--pickup']}`}
                id="btn__pickup"
                type="ghost"
              >
                Pick Up
              </Button>
            </Space>
          </Card>
          <Card className={styles['card__inner__right']} id="card__inner__right">
            <Row style={{ gap: 10 }} align="middle" justify="center">
              <Image
                width={143}
                height={203}
                style={{ borderRadius: 8 }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={false}
                id="image__barang"
              />
              <Card
                className={styles['card__detail']}
                bodyStyle={{ height: '100%', width: '100%', padding: '10px 16px', overflowY: 'scroll' }}
                id="card__detail"
              >
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Warehouse
                </Typography.Title>
                <Typography.Paragraph ellipsis className={styles['detail__value']} id="detail__value">
                  Inventron Semarang
                </Typography.Paragraph>
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Kategori
                </Typography.Title>
                <Typography.Paragraph ellipsis className={styles['detail__value']} id="detail__value">
                  M-17
                </Typography.Paragraph>
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Waktu Check In
                </Typography.Title>
                <Typography.Paragraph className={styles['detail__value']} id="detail__value">
                  Rabu, 03 Mei 2023
                </Typography.Paragraph>
                <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                  Waktu Check Out
                </Typography.Title>
                <Typography.Paragraph className={styles['detail__value']} id="detail__value">
                  Minggu , 07 Mei 2023
                </Typography.Paragraph>
              </Card>
            </Row>
          </Card>
        </Row>
      </Card>

      <Row justify="center" style={{ marginTop: 20 }}>
        <Pagination defaultCurrent={1} total={5} pageSize={5} onChange={() => console.log('jalan')} />
      </Row>
    </section>
  )
}

export default KelolaBarang
