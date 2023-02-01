import * as React from 'react'
import chart from '../../../assets/icons/chart.svg'

export const Welcome3: React.FC = () => {
  return (
    <div text-center>
      <img src={chart} />
      <h2 text-32px mt-48px>数据可视化<br/>收支一目了然</h2>
    </div>
  )
}