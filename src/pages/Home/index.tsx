import * as React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import pig from '../../assets/icons/pig.svg'
import { useTitle } from '../../hooks/useTitle';
import { ajax } from '../../utils/ajax';
import { Item, Resource, Resources, User } from '../../utils/types';
import { Loading } from '../../components/Loading/Loading';
import { AddItemFloatButton } from '../../components/AddItemFloatButton';
import { Icon } from '../../components/CustomIcon';
import { useNavigate } from 'react-router-dom';

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
  const isLoadingMe = !meData && !meError // 查询《我的详情》loading
  const isLoadingItem = meData && !itemsData && !itemsError // 查询《账单列表》loading
  const nav = useNavigate() 

  if (isLoadingMe || isLoadingItem) {
    return <Loading message='加载中...' />
  }

  const handleStart = () => {
    nav('/items')
  }

  return (
    <div>
      <div flex justify-center items-center py-120px>
        <img src={pig} w='128px' h="130px" />
        {/* <Icon name="add" className='w-128px h-130px' /> */}
      </div>
      <div px-16px text-2xl>
        <button onClick={handleStart} wlin-custom-button>开始记账</button>
      </div>
      <AddItemFloatButton onClick={handleStart} />
    </div>
  )
}