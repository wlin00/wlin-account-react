import * as React from 'react'
import { ICurrentTab, TimeTabItem } from '../../utils/types'
import { Tabs } from '../Tabs/Tabs';

interface Props {
  onChange: (value: keyof ICurrentTab) => void,
  value: keyof ICurrentTab
}

const tabArr: TimeTabItem[] = [
  { key: 'thisMonth', text: '本月' },
  { key: 'lastMonth', text: '上月' },
  { key: 'thisYear', text: '今年' },
  { key: 'custom', text: '自定义时间' },
]

export const TimeRangePicker: React.FC<Props> = ({ value, onChange }) => {

  return (
    <Tabs value={value} onChange={onChange} tabItems={tabArr} />
  )
}