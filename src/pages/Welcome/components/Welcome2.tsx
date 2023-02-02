import * as React from 'react'
import clock from '../../../assets/icons/clock.svg'

export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <img src={clock} w-128px h-150px />
      <h2 text-32px mt-48px>每日提醒<br/>不遗漏每一笔账单</h2>
    </div>
  )
}