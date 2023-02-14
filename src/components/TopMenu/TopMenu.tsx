import * as React from 'react'
import { CurrentUser } from './components/CurrentUser'
import { MenuList } from './components/MenuList'

export const TopMenu: React.FC = () => {
  return (
    <div 
      fixed top-0 left-0 w="70vw" max-w-20em h-screen flex flex-col b-1px b="#ddd"
    >
      <CurrentUser className='grow-0 shrink-0' />
      <MenuList className="grow-1 shrink-1" />
    </div>
  )
}