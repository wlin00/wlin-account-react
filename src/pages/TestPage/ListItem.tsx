import s from './List.module.scss'
import { Item } from './List';
interface IListItemProps {
  onDelete: (id: number) => any,
  item: Item
}
// 列表元素组件
export const ListItem: React.FC<IListItemProps> = ({ item, onDelete }) => {
  return (
    <div className={s.listItem}>
      <span>{item.name}</span>
      <span className={s.button} onClick={onDelete(item.id)}>delete</span>
    </div>
  )
}
