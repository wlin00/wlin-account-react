import * as React from 'react'
import s from './ItemCreate.module.scss'
import { Icon } from '../../../../components/Icon';
import { Topnav } from '../../../../components/Topnav/Topnav';
import { useNavigate } from 'react-router-dom';

export const ItemCreate: React.FC = () => {
  const nav = useNavigate()
  const handleIconClick = () => {
    nav('/items')
  }

  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav title="记一笔" icon={
          <Icon name="left" className="text-white" onClick={handleIconClick} />
        } />
      </div>
      <div className={s.wrapper}>
        123
      </div>
    </div>
  )
}