// 用于承载Welcome part1 - part4 的容器组件
import { animated, useTransition } from '@react-spring/web';
import * as React from 'react'
import type { ReactNode } from 'react';
import { Link, useLocation, useOutlet } from 'react-router-dom';
import { useRef } from 'react';
import logo from '../../assets/icons/mangosteen.svg'

interface IWelcomePath {
  '/welcome/1': string,
  '/welcome/2': string,
  '/welcome/3': string,
  '/welcome/4': string,
}

// 容器组件 WelcomeLayout
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({}) // 使用map: Record<string, ReactNode> 哈希表来存储以当前路径为key，以当前子组件虚拟Dom为值的数据
  const location = useLocation() // 获取当前地址信息如：'/welcome/1'
  const outlet = useOutlet() // 获取当前地址的插槽子组件
  const linkMap: Record<keyof IWelcomePath, string> = { 
    '/welcome/1': '/welcome/2',
    '/welcome/2': '/welcome/3',
    '/welcome/3': '/welcome/4',
    '/welcome/4': '/start'
  }
  map.current[location.pathname] = outlet // 存储到hash表，方便下面在div中渲染当前地址的子组件并添加过渡动画
  // 按 react-sping 文档配置当前路由（淡入/淡出）的过渡动画
  const transitions = useTransition(location.pathname, {
    // 淡入
    from: { transform: 'translateX(100%)' },
    // 稳定
    enter: { transform: 'translateX(0%)' },
    // 淡出
    leave: { transform: 'translateX(-100%)' },
    // 配置项如持续时间
    config: { duration: 300 }
  })

  return (
    <div className='bg-#39f' h-screen flex flex-col items-stretch pb-16px>
      <header shrink-0 text-center pt-64px>
        <img src={logo} w-64px />
        <h1 className='text-#D4D4EE' text-32px>Wlin记账</h1>
      </header>
      <main overflow-hidden shrink-1 grow-1 bg-white m-16px rounded-8px flex justify-center items-center>{
        transitions((style, pathname) => {
          return <animated.div key={pathname} style={style}>
            { map.current[location.pathname] }  {/* 渲染当前路径对应的插槽子组件Outlet */}
          </animated.div>
        })     
      }</main>
      <footer pb-5px shrink-0 text-center text-24px text-white grid grid-cols-3 grid-rows-1>
        <Link style={{ gridArea: '1 / 2 / 2 / 3' }} to={linkMap[location.pathname as keyof IWelcomePath]}>下一页</Link>
        <Link style={{ gridArea: '1 / 3 / 2 / 4' }} to="/start">跳过</Link>
      </footer>
    </div>
  )
}