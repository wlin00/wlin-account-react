import * as React from 'react'
import pig from '../../../assets/icons/pig.svg'

export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img src={pig} w-128px h-130px />
      <h2 text-32px mt-48px>会挣钱<br/>还会省钱</h2>
    </div>
  )
}