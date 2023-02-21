import * as React from 'react'
import s from './ItemCreate.module.scss'
import { Icon } from '../../../../components/Icon';
import { Topnav } from '../../../../components/Topnav/Topnav';
import { useNavigate } from 'react-router-dom';
import { PaymentTabs } from '../../../../components/PaymentTabs/ PaymentTabs';
import { useState } from 'react';
import { IPaymentTab } from '../../../../utils/types';
import { DateAndAmount } from '../DateAndAmount/DateAndAmount';

export const ItemCreate: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<keyof IPaymentTab>('expenses')
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
        <PaymentTabs value={currentTab} onChange={setCurrentTab} />
      </div>
      <div className={s.wrapper}>
        <DateAndAmount className="grow-0 shrink-0" />
      </div>
    </div>
  )
}