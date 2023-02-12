import * as React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import pig from '../../assets/icons/pig.svg'
import add from '../../assets/icons/add.svg'
import { useTitle } from '../../hooks/useTitle';
import { ajax } from '../../utils/ajax';
import { Item, Resource, Resources, User } from '../../utils/types';

interface Props {
  title?: string
}

export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const { data: meData, error: meError } = useSWR('/api/v1/me', async (path) => (await ajax.get<Resource<User>>(path)).data.resource)
  const { data: itemsData, error: itemsError } = useSWR(
    meData ? '/api/v1/items': null,  // 等待上一个swr请求的数据回来后才发起第二个
    async (path) => (await ajax.get<Resources<Item>>(path)).data // api请求的回调
  )
  console.log('meData', meData, 'itemsData', itemsData, 'itemsError', itemsError)

  // const isLoadingMe = !meData && !meError
  // const isLoadingItem = !itemsData && !itemsError
  // console.log('loading1', isLoadingMe, 'loading2', isLoadingItem)

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