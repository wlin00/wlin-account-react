// React Hook TodoList场景，使用useCallback、React.memo等手段最小化列表重渲染
import * as React from 'react'
import s from './List.module.scss'
import { useState, useCallback } from 'react';
import { MemoizedListItem } from './ListItem';

interface IListProps {
}

export type Item = {
  name: string,
  id: string,
  isCompleted?: boolean
}

// 列表组件
export const List: React.FC<IListProps> = () => {
  const [list, setList] = useState<Item[]>([
    { name: 'Apple', id: '1', isCompleted: false },
    { name: 'Banana', id: '2', isCompleted: false },
    { name: 'Orange', id: '3', isCompleted: false },
    { name: 'Noodle', id: '4', isCompleted: false },
    { name: 'Watermelon', id: '5', isCompleted: false },
  ])

  // 删除列表元素
  const handleDelete = useCallback((id: string) => {
    setList((prev) => prev.filter((item) => item.id !== id))
  }, [])

  // 更新列表元素状态
  const handleUpdate = useCallback((id: string) => {
    // 由于 useState 的更新是异步的, 所以这里使用回调确保拿到更新后的list数组
    setList((prev) => {
      const listSlice = [...prev]
      const updateIndex = listSlice.findIndex((item) => item.id === id)
      const updateItem = listSlice.find((item) => item.id === id)!
      listSlice.splice(updateIndex, 1, {
        ...updateItem,
        isCompleted: true
      })
      return listSlice
    })
 
  }, [])
  
  // 添加列表元素
  const handleAdd = () => {
    setList((prev) => [...prev, {
      id: Math.random().toString(36).slice(2, 7),
      name: 'AddItem'
    }])
  }

  return (<>
    <div className={s.list}>
      {list.map((item: Item) => (
        <MemoizedListItem 
          key={item.id} 
          item={item} 
          onDelete={handleDelete} 
          onUpdate={handleUpdate} 
        />
      ))}
    </div>
    <div className={s.addWrap}>
      <span onClick={handleAdd}>add</span>
    </div>
  </>
  )
}

