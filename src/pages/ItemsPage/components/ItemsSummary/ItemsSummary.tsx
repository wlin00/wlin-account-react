import * as React from 'react'
import { Summary } from '../../../../utils/types'
import s from './ItemsSummary.module.scss'

type SummaryRules<T> = SummaryRule<T>[]
type SummaryRule<T> = {
  code: keyof T,
  name: string
}

const summaryList: SummaryRules<Summary> = [
  { code: 'income', name: '收入' },
  { code: 'expenses', name: '支出' },
  { code: 'profit', name: '净收入' },
]

export const ItemsSummary: React.FC = () => {
  return (
    <ol
      bg="#252A43" flex justify-between items-center m-16px rounded-8px py-12px px-16px children-px-24px text-center
      className={s.summaryWrap}
    >
      {
        summaryList.map((item) => (
          <li key={item.code}>
            <div>{ item.name }</div>
            <div>1000</div>
          </li>
        ))
      }

    </ol>
  )
}