import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Trang Chủ',
    url: '/',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Quản lý'
  },
  {
    name: 'Danh sách phòng',
    url: '/rooms',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Nguời thuê nhà',
    url: '/tenants',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Hoá đơn hàng tháng',
    url: '/monthly-bill',
    iconComponent: { name: 'cil-dollar' }
  },
  {
    name: 'Nhân viên',
    url: '/staff',
    iconComponent: { name: 'cil-people' }
  },
  {
    title: true,
    name: 'Thiết lập'
  },
  {
    name: 'Chi phí cố định',
    url: '/fixed-cost',
    iconComponent: { name: 'cil-dollar' }
  }
];
