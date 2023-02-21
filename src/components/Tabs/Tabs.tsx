import s from './Tabs.module.scss'

interface Props<T> {
  value: T,
  onChange: (val: T) => void,
  tabItems: { key: T, text: string }[]
}

export const Tabs = <T extends string>({ value, onChange, tabItems = [] }: Props<T>) => {
  return (
    <ol
      flex text-white children-px-24px children-py-12px
    >
      {tabItems.map((item) => (
        <li 
          key={item.key}
          className={item.key === value ? s.selected: ''}
          onClick={() => onChange(item.key)}
        >{item.text}</li>
      ))}
    </ol>
  )
}