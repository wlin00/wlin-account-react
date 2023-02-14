import * as React from 'react'
import { CurrentUser } from './components/CurrentUser'
import { MenuList } from './components/MenuList'
import { useMenuStore } from '../../stores/useMenuStore';

export const TopMenu: React.FC = () => {
  const { setVisible } = useMenuStore()
  const handleMaskClick = () => {
    setVisible(false)
  }
  return (<>
    <div
      fixed top-0 left-0 w="100%" h="100%" z="[calc(var(--z-menu)-1)]"
      className='bg-black:75'
      onClick={handleMaskClick}
    />
    <div 
      fixed top-0 left-0 w="70vw" max-w-20em h-screen flex flex-col b-r-1px b="#ddd" z="[calc(var(--z-menu))]"
    >
      <CurrentUser className='grow-0 shrink-0' />
      <MenuList className="grow-1 shrink-1" />
    </div>
  </>)
}