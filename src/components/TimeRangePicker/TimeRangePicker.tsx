import * as React from 'react'
import s from './TimeRangePicker.module.scss'
import { ICurrentTab, TimeTabItem } from '../../utils/types'

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
    <ol
      flex text-white children-px-24px children-py-12px
    >
      {tabArr.map((item: TimeTabItem) => (
        <li 
          key={item.key}
          className={item.key === value ? s.selected: ''}
          onClick={() => onChange(item.key)}
        >{item.text}</li>
      ))}
    </ol>
  )
}