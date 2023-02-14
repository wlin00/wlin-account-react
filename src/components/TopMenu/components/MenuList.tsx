import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../CustomIcon';

interface Props {
  className?: string
}

const list = [
  { path: '/items/list', name: '我的记账', icon: 'home' },
  { path: '/statistics', name: '统计图表', icon: 'charts' },
  // { path: '/export', name: '导出数据', icon: 'export' },
  { path: '/notify', name: '记账提醒', icon: 'notify' },
]

export const MenuList: React.FC<Props> = ({ className }) => {
  const nav = useNavigate()
  return (
    <ul
      bg-white text-20px py-16px children-flex children-items-center children-px-16px children-py-8px children-mb-4px
      className={className}
    >{
      list.map((item) => (
        <li key={item.icon} onClick={() => nav(item.path)}>
          <Icon name={item.icon} />
          <span m-l-10px>{item.name}</span>
        </li>
      ))
    }</ul>
  )
}