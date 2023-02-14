import * as React from 'react'
import { Icon } from '../../../components/CustomIcon';

export const Welcome3: React.FC = () => {
  return (
    <div text-center>
      <Icon name='chart' className='w-128px h-130px'  />
      <h2 text="#333" text-32px mt-48px>数据可视化<br/>收支一目了然</h2>
    </div>
  )
}