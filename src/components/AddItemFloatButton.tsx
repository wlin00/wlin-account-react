import * as React from 'react'
import { Icon } from './CustomIcon/Icon';

export const AddItemFloatButton: React.FC = () => {
  return (
    <button inline-flex justify-center items-center p-4px w-56px h-56px bg="#39f" rounded="50%" b-none text-white text-6xl fixed bottom-16px right-16px>
      <Icon name="menu" className="w-40px h-40px" />
    </button>
  )
}