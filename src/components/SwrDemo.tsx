import * as React from 'react'
import useSWR from 'swr'
import axios from 'axios'
const fetcher = (path: string) => {
  return axios.get<{message: string}>(path) // 测试调用一个返回 { message: string } 的get接口
}
export const SwrDemo: React.FC = () => {
  // swr可以用于自定义请求发送频率（比如一个组件不需要每次刷新都拉取数据，而是有一定的节流控制），自带错误处理；
  // 返回的isValidating 表示已经请求过1次以上的接口，再次进行了数据刷新时的标志符
  // swr第一次进行拉取接口的loading标识符需要用户手动判断，例如 isLoading = !data && !error, 即当没有错误时展示第一次的loading，且需要后端在没有数据时依然返回json对象而不是空返回
  const { data, error, isValidating, mutate } = useSWR('http://47.94.212.148:3000/', fetcher) 
  const onClick = async () => {
    const data = await axios.post('xxx') // data类型：{ message: string }
    mutate(data) // mutate方法用于swr同步更新缓存数据，一般在post请求更新数据后使用，因为swr只支持get请求，主要着重在get接口缓存策略上
  }
  console.log('data', data?.data)
  if (error) { // 错误优先返回
    return <div>fail to load</div> 
  }
  if (!data) { // swr第一次请求时的loading，用 !data表示
    return <div>loading...</div>
  }
  if (isValidating) { // swr第二次及以后的请求，其loading用isValidating表示
    return <div>正在获取最新值</div>
  }
  // 数据渲染
  return <div>{data?.data.message}</div>
}