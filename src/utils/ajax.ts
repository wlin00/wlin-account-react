import axios from 'axios'
import { JSONValue } from './types';

axios.defaults.baseURL = isDev 
  ? '/' // 测试环境 
  : 'http://47.94.212.148:3000/api/v1' // 生产环境
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

export const ajax = {
  get: <T>(path: string) => {
    return axios.get<T>(path)
  },
  post: <T>(path: string, data: JSONValue) => {
    return axios.post<T>(path, data)
  },
  patch: () => {},
  delete: () => {},
}