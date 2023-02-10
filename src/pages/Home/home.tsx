import * as React from 'react'
import pig from '../../assets/icons/pig.svg'
import add from '../../assets/icons/add.svg'

export const Home: React.FC = () => {
  return (
    <div>
      <div flex justify-center items-center py-120px>
        <img src={pig} w='128px' h="130px" />
      </div>
      <div px-16px text-2xl>
        <button h-48px w="100%" bg="#39f" b-none text-white rounded-8px>开始记账</button>
      </div>
      <button p-4px w-56px h-56px bg="#39f" rounded="50%" b-none text-white text-6xl fixed bottom-16px right-16px>
        <img src={add} max-w="100%" max-h="100%" />
      </button>
    </div>
  )
}