import * as React from 'react'
import { Icon } from '../../../components/CustomIcon';

export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <Icon name='pig' className='w-128px h-130px'  />
      <h2 text="#333" text-32px mt-48px>会挣钱<br/>还会省钱</h2>
    </div>
  )
}