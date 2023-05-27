import s from './List.module.scss'
import { Item } from './List';
import React from 'react';
interface IListItemProps {
  onDelete: (id: string) => any,
  onUpdate: (id: string) => any,
  item: Item
}
// 列表元素组件
export const ListItem: React.FC<IListItemProps> = ({ item, onDelete, onUpdate }) => {
  return (
    <div className={s.listItem}>
      <span className={item.isCompleted ? s.isCompleted: ''}>{item.name}</span>
      <span className={s.buttonWrap}>
        <span className={[s.button, s.normalStyle].join(' ')} onClick={() => onUpdate(item.id)}>update</span>
        <span className={s.button} onClick={() => onDelete(item.id)}>delete</span>
      </span>
    </div>
  )
}
// 普通模式 - 删除/更新 任意一个ListItem会造成整个列表重渲染
// export const MemoizedListItem = ListItem 

// React.memo模式，默认写法，根据key比对，如果listItem的key相同则不进行重渲染
// export const MemoizedListItem = React.memo(ListItem)

// React.memo模式，使用参数2来自定义比对，当前后的props满足：id、和isCompleted字段都不变时可以不进行重渲染
export const MemoizedListItem = React.memo(ListItem, 
  (prevProps: any, nextProps: any) => 
    prevProps.item.id === nextProps.item.id && 
    prevProps.item.isCompleted === nextProps.item.isCompleted
)


