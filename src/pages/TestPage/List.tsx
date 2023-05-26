// 列表场景最小化，删除新增元素，最小化渲染demo
import * as React from 'react'
import s from './List.module.scss'
import { useState } from 'react';
import { ListItem } from './ListItem';

interface IListProps {

}

export type Item = {
  name: string,
  id: number
}

// 列表组件
export const List: React.FC<IListProps> = () => {
  const [list, setList] = useState<Item[]>([
    { name: 'Apple', id: 1 },
    { name: 'Banana', id: 2 },
    { name: 'Orange', id: 3 },
    { name: 'Noodle', id: 4 },
    { name: 'Watermelon', id: 5 },
  ])
  const onDeleteFn = (id: number) => {
    console.log('deleteId', id)
    // setList((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <div className={s.list}>
      {list.map((item: Item) => (
        <ListItem item={item} key={item.id} onDelete={onDeleteFn} />
      ))}
    </div>
  )
}

