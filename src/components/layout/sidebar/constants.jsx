import { Link } from 'react-router-dom'
import { iconDashboard, iconLoker, iconTransaksi, iconUser } from '../../../assets/icons/admin'
import styles from './styles.module.css'

export const MENU_ITEMS = [
  {
    key: '1',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <img className={styles['icon']} src={iconDashboard} alt="icon dashboard" />,
  },
  {
    key: '2',
    label: <Link to="/kelola-transaksi">Kelola Transaksi</Link>,
    icon: <img className={styles['icon']} src={iconTransaksi} alt="icon transaksi" />,
  },
  {
    key: '3',
    label: <Link to="/kelola-barang">Kelola Barang</Link>,
    icon: <img className={styles['icon']} src={iconLoker} alt="icon loker" />,
  },
  {
    key: '4',
    label: <Link to="/kelola-user">Kelola User</Link>,
    icon: <img className={styles['icon']} src={iconUser} alt="icon user" />,
  },
]
