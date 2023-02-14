import * as React from 'react'
import { Icon } from './CustomIcon';
import { useMenuStore } from '../stores/useMenuStore';
interface Props {
  title?: string
}

export const Topnav: React.FC<Props> = ({ title = 'Wlin记账' }) => {
  const { setVisible, visible } = useMenuStore()
  const handleClick = () => {
    // 点击后通信zustand仓库，唤起左侧滑动菜单组件
    setVisible(!visible)
  }
  return (
    <div text-white flex items-center p-16px>
      <Icon name="menu" className='w-24px h-24px mr-16px' onClick={handleClick} />
      <h1 text-24px>{title}</h1>
    </div>
  )
}