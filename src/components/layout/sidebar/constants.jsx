import { Link } from 'react-router-dom'
import { iconDashboard, iconLoker, iconTransaksi, iconUser, iconBox } from '../../../assets/icons/admin'
import styles from './styles.module.css'

export const MENU_ITEMS = [
  {
    key: '/dashboard',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <img className={styles['icon']} src={iconDashboard} alt="icon dashboard" />,
  },
  {
    key: '/kelola-transaksi',
    label: <Link to="/kelola-transaksi">Kelola Transaksi</Link>,
    icon: <img className={styles['icon']} src={iconTransaksi} alt="icon transaksi" />,
  },
  {
    key: '/kelola-warehouse',
    label: <Link to="/kelola-warehouse">Kelola Warehouse</Link>,
    icon: <img className={styles['icon']} src={iconLoker} alt="icon loker" />,
  },
  {
    key: '/kelola-barang',
    label: <Link to="/kelola-barang">Kelola Barang</Link>,
    icon: <img className={styles['icon']} src={iconBox} alt="icon loker" />,
  },
  {
    key: '/kelola-akun',
    label: <Link to="/kelola-akun">Kelola Akun</Link>,
    icon: <img className={styles['icon']} src={iconUser} alt="icon user" />,
  },
]
