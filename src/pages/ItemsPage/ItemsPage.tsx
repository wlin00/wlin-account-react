import * as React from 'react'
import s from './ItemsPage.module.scss'
import { Topnav } from '../../components/Topnav';
import { TimeRangePicker } from '../../components/TimeRangePicker/TimeRangePicker';
import { ItemsSummary } from './components/ItemsSummary/ItemsSummary';
import { ItemsList } from './components/ItemsList/ItemsList';
import { AddItemFloatButton } from '../../components/AddItemFloatButton';
import { useState } from 'react';
import { ICurrentTab, Item } from '../../utils/types';
import { TopMenu } from '../../components/TopMenu';
import { useMenuStore } from '../../stores/useMenuStore';

export const ItemsPage: React.FC = () => {
  const { visible } = useMenuStore()
  const [currentTab, setCurrentTab] = useState<keyof ICurrentTab>('thisMonth')
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'test',
      kind: 'income',
      sign: 'sign1',
      amount: 1000,
      user_id: 1,
      tags_id: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      tags: []
    }, {
      id: 2,
      name: 'test2',
      kind: 'expenses',
      sign: 'sign2',
      amount: 1500,
      user_id: 2,
      tags_id: [2],
      happen_at: '2020-01-01T00:00:00.000Z',
      created_at: '2020-01-01T00:00:00.000Z',
      tags: []
    }
  ])
  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav title="Wlin记账" />
        <TimeRangePicker value={currentTab} onChange={setCurrentTab} />
      </div>
      <ItemsSummary />
      <ItemsList data={list} />
      <AddItemFloatButton />
      { visible ? <TopMenu /> : null }
    </div>
  )
}