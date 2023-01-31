// 用于承载Welcome part1 - part4 的容器组件
import { animated, useTransition } from '@react-spring/web';
import * as React from 'react'
import type { ReactNode } from 'react';
import { Outlet, useLocation, useOutlet } from 'react-router-dom';
// 使用map: Record<string, ReactNode> 哈希表来存储以当前路径为key，以当前子组件虚拟Dom为值的数据
const map: Record<string, ReactNode> = {}
// 容器组件 WelcomeLayout
export const WelcomeLayout: React.FC = () => {
  // const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation() // 获取当前地址信息如：'/welcome/1'
  const outlet = useOutlet() // 获取当前地址的插槽子组件
  map[location.pathname] = outlet // 存储到hash表，方便下面在div中渲染当前地址的子组件并添加过渡动画
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

  return transitions((style, pathname) => {
    return <animated.div key={pathname} style={style}>
      { map[location.pathname] }  {/* 渲染当前路径对应的插槽子组件Outlet */}
    </animated.div>
  })
}