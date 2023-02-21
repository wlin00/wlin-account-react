import * as React from 'react'
import { Icon } from './CustomIcon';

interface Props {
  onClick?: () => void,
  icon?: string
}

export const AddItemFloatButton: React.FC<Props> = ({ onClick, icon='menu' }) => {
  return (
    <button onClick={onClick} inline-flex justify-center items-center p-4px w-56px h-56px bg="#39f" rounded="50%" b-none text-white text-6xl fixed bottom-16px right-16px>
      <Icon name={icon} className="w-40px h-40px" />
    </button>
  )
}