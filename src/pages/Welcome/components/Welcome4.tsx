import * as React from 'react'
import { Icon } from '../../../components/CustomIcon';

export const Welcome4: React.FC = () => {
  return (
    <div text-center>
      <Icon name='cloud' className='w-128px h-130px'  />
      <h2 text="#333" text-32px mt-48px>云备份<br/>再也不怕数据丢失</h2>
    </div>
  )
}