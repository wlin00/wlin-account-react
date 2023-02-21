import s from './Tabs.module.scss'

interface Props<T> {
  value: T,
  onChange: (val: T) => void,
  tabItems: { key: T, text: string }[],
  className?: string,
  textMode?: string
}

export const Tabs = <T extends string>({ value, onChange, tabItems = [], className, textMode = 'left' }: Props<T>) => {
  return (
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
  )
}