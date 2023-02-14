import * as React from 'react'
import { Icon } from '../../../components/CustomIcon';

export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <Icon name='clock' className='w-128px h-130px'  />
      <h2 text="#333" text-32px mt-48px>每日提醒<br/>不遗漏每一笔账单</h2>
    </div>
  )
}