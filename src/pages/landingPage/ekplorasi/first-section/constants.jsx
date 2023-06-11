import {
  image1,
  image2,
  image3,
  image4,
  lokasiBandung,
  lokasiJakarta,
  lokasiMalang,
  lokasiSurabaya,
} from '../../../../assets/images/explorasi'
const menu = [
  {
    label: 'Eksplorasi',
    link: '#eksplorasi',
  },
  {
    label: 'Tentang Kami',
    link: '#tentangKami',
  },
  {
    label: 'Kontak',
    link: '#kontak',
  },
  {
    label: 'Unduh',
    link: '#unduh',
  },
]

const firstList = [
  { image: image1, label: 'Metode Pembayaran yang mudah' },
  { image: image2, label: 'Penyimpanan yang aman' },
  { image: image3, label: 'Mudah ditemukan' },
  { image: image4, label: 'Promo yang menarik' },
]

const secondList = [
  { image: lokasiMalang, title: 'Inventron Malang' },
  { image: lokasiSurabaya, title: 'Inventron Surabaya' },
  { image: lokasiBandung, title: 'Inventron Bandung' },
  { image: lokasiJakarta, title: 'Inventron Jakarta' },
]
export { menu, firstList, secondList }
