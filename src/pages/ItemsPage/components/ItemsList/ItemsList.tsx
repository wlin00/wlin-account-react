import * as React from 'react'
import { Item, Resources } from '../../../../utils/types';
import useSwrInfinite from 'swr/infinite'
import { ajax } from '../../../../utils/ajax'

interface Props {
  // data: Item[]
}

const getKey = (pageIndex: number = 0, prev: Resources<Item>) => { // 获取当前无限分页的page页码
  if (prev) { 
    // 若是第2页及以后的分页请求，需判断上一次请求是否已经没有更多数据（对比上一次请求后的总记录数，是否到达分页里的总数据数count）
    const prevListCount = (prev.pager.page - 1) * prev.pager.per_page + prev.resource.length
    if (prevListCount >= prev.pager.count) { // 若没有更多数据，则不再请求下一页
      return null
    }
  }
  return `/api/v1/items?page=${pageIndex + 1}` 
}

export const ItemsList: React.FC<Props> = () => {
  const { data, error, size, setSize } = useSwrInfinite(
    getKey, 
    async path => (await ajax.get<Resources<Item>>(path)).data,
    { revalidateFirstPage: false }
  )

  if (!data) {
    return <span>暂无数据</span>
  }

  // 判断是否还有更多数据 (page - 1) * per_page + resource.length < count
  const latestRecord = data[data.length - 1]
  const { page, per_page, count } = latestRecord.pager
  const hasMore = (page - 1) * per_page + latestRecord.resource.length < count

  const handleLoadMore = () => { // swr-infinite 分页请求下一页
    setSize(size + 1)
  }
  
  return (
    <>
      <ol>{
        data?.map(({ resource }) => {
          return resource.map(item =>
            <li key={item.id} grid grid-cols="[auto_1fr_auto]" grid-rows-2 px-16px py-8px gap-x-12px
              border-b-1 b="#EEE">
              <div row-start-1 col-start-1 row-end-3 col-end-2 text-24px w-48px h-48px
                bg="#D8D8D8" rounded="50%" flex justify-center items-center>
                😘
              </div>
              <div row-start-1 col-start-2 row-end-2 col-end-3>
                旅行
              </div>
              <div row-start-2 col-start-2 row-end-3 col-end-4 text="#999999">
                2011年1月1日
              </div>
              <div row-start-1 col-start-3 row-end-2 col-end-4 text="#53A867">
                ￥{item.amount / 100}
              </div>
            </li>
          )
        })
      }</ol>
      <div p-16px>
        { hasMore ? (
          <button wlin-custom-button onClick={handleLoadMore}>加载更多</button>
        ) : (
          <span flex-c>暂无数据</span>
        ) }
      </div>
  </>
  )
}