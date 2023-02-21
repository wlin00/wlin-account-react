import * as React from 'react'
import { ICurrentTab, TimeTabItem } from '../../utils/types'
import { Tabs } from '../Tabs/Tabs';
import { ItemsSummary } from '../../pages/ItemsPage/components/ItemsSummary/ItemsSummary';
import { ItemsList } from '../../pages/ItemsPage/components/ItemsList/ItemsList';

interface Props {
  onChange: (value: keyof ICurrentTab) => void,
  value: keyof ICurrentTab
}

const tabArr: TimeTabItem[] = [
  { key: 'thisMonth', text: '本月', element: <><ItemsSummary /><ItemsList /></> },
  { key: 'lastMonth', text: '上月', element: <><ItemsSummary /><ItemsList /></> },
  { key: 'thisYear', text: '今年', element: <><ItemsSummary /><ItemsList /></> },
  { key: 'custom', text: '自定义时间', element: <><ItemsSummary /><ItemsList /></> },
]

export const TimeRangePicker: React.FC<Props> = ({ value, onChange }) => {

  return (
    <Tabs value={value} onChange={onChange} tabItems={tabArr} />
  )
}