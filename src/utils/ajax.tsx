import axios from 'axios'

axios.defaults.baseURL = isDev 
  ? '/' // 测试环境 
  : 'http://47.94.212.148:3000/api/v1' // 生产环境
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

export const ajax = {
  get: (path: string) => {
    return axios.get(path)
  },
  post: () => {},
  patch: () => {},
  delete: () => {},
}