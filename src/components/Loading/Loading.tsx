import * as React from 'react'
import s from './Loading.module.scss'
import { Icon } from '../CustomIcon';
interface Props {
  className?: string,
  message?: string,
}

export const Loading: React.FC<Props> = ({ className, message='加载中...' }) => {
  return (
    <div 
      flex flex-col justify-center items-center h-screen
      className={[s.customLoading, className].join(' ')}
    >
      <Icon name="loading" className={['h-128px', 'w-128px'].join(' ')} />
      <p p-20px text-lg>{message}</p>
    </div>
  )
}