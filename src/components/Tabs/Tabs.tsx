import { ReactNode } from 'react'
import s from './Tabs.module.scss'

interface Props<T> {
  tabItems: { 
    key: T,
    text: string,
    element?: ReactNode
  }[],
  className?: string,
  textMode?: string,
  value: T,
  onChange: (val: T) => void,
}

export const Tabs = <T extends string>({ value, onChange, tabItems = [], className, textMode = 'left' }: Props<T>) => {
  return (
    <div flex flex-col relative top-1px>
      <ol
        flex text-white children-px-24px children-py-12px
        className={className}
      >
        {tabItems.map((item) => (
          <li 
            key={item.key}
            className={[s.tabItem, item.key === value ? s.selected: '', textMode === 'center' ? s.textCenter: ''].join(' ')}
            onClick={() => onChange(item.key)}
          >{item.text}</li>
        ))}
      </ol>
      <div
        grow-1 shrink-1 overflow-auto bg-white
      >
        {tabItems.filter(item => item.key === value)[0].element}
      </div>
    </div>
  )
}