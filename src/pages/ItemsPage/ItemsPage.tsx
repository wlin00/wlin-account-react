import * as React from 'react'
import s from './ItemsPage.module.scss'
import { Topnav } from '../../components/Topnav';
import { TimeRangePicker } from '../../components/TimeRangePicker';
import { ItemsSummary } from './components/ItemsSummary';
import { ItemsList } from './components/ItemsList';
import { AddItemFloatButton } from '../../components/AddItemFloatButton';

export const ItemsPage: React.FC = () => {
  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav />
        <TimeRangePicker />
      </div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}