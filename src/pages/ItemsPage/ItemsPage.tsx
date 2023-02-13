import * as React from 'react'
import s from './ItemsPage.module.scss'
import { Topnav } from '../../components/Topnav';
import { TimeRangePicker } from '../../components/TimeRangePicker/TimeRangePicker';
import { ItemsSummary } from './components/ItemsSummary';
import { ItemsList } from './components/ItemsList';
import { AddItemFloatButton } from '../../components/AddItemFloatButton';
import { useState } from 'react';
import { ICurrentTab } from '../../utils/types';

export const ItemsPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<keyof ICurrentTab>('thisMonth')
  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav title="Wlin记账" />
        <TimeRangePicker value={currentTab} onChange={setCurrentTab} />
      </div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}