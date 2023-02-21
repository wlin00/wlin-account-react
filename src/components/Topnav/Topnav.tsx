import * as React from 'react'
import type { ReactNode } from 'react'
import s from './Topnav.module.scss'
interface Props {
  title?: string,
  icon: ReactNode
}

export const Topnav: React.FC<Props> = ({ title = 'Wlin记账', icon }) => {

  return (
    <div 
     text-white flex items-center pt-24px pb-8px px-20px
      className={s.topnav} 
    >
      <span w-24px h-24px mr-16px flex justify-center items-center children-max-w="100%" children-max-h="100%">
        {icon}
      </span>
      <h1 text-24px>{title}</h1>
    </div>
  )
}