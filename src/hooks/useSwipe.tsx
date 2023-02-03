import { useRef, useEffect, useMemo, useState } from 'react';
import type { RefObject } from 'react'
type Point = {
  x: number;
  y: number;
}
interface Options { // 定义同步钩子函数选项的类型，再hook手指滑动事件的各个周期执行的钩子函数
  beforeTouchStart?: (e: TouchEvent) => void,
  afterTouchStart?: (e: TouchEvent) => void,
  beforeTouchMove?: (e: TouchEvent) => void,
  afterTouchMove?: (e: TouchEvent) => void,
  beforeTouchEnd?: (e: TouchEvent) => void,
  afterTouchEnd?: (e: TouchEvent) => void,
}

// useSwipe hook，传入参数1: 当前绑定的dom， 参数2: 配置选项，默认值：默认在touchstart前终止浏览器外框滑动事件
// 功能：监听用户对绑定Dom的手指触碰事件：touchStart、touchMove、touchEnd，向外暴露当前滑动的方向 & 是否处于滑动进行中的标识变量
export const useSwipe = (element: RefObject<HTMLElement>, options: Options = { beforeTouchStart: (e: TouchEvent) => e.preventDefault() }) => {
  const swiping = useRef<boolean>(false)
  const [start, setStart] = useState<Point>()
  const [end, setEnd] = useState<Point>()

  const handleTouchStart = (e: TouchEvent) => {
    options.beforeTouchStart?.(e)
    // 手指滑动开始，记录滑动开始坐标
    setStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientX
    })
    // 手指滑动开始，当前标识符更新
    swiping.current = true
    options.afterTouchStart?.(e)
  }

  const handleTouchMove = (e: TouchEvent) => {
    options.beforeTouchMove?.(e)
    // 手指滑动过程中，更新滑动结束坐标
    setEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    })
    options.afterTouchMove?.(e)
  }

  const handleTouchEnd = (e: TouchEvent) => {
    options.beforeTouchEnd?.(e)
    // 手指滑动结束，当前标识符更新
    swiping.current = false
    options.afterTouchEnd?.(e)
  }

  // 计算属性： 当前手指滑动发生时的x，y偏移（笛卡尔坐标）
  const distance = useMemo(() => { // 当前手指滑动位移
    if (!start || !end) {
      return null
    }
    return {
      x: end.x - start.x,
      y: end.y - start.y,
    }
  }, [start, end])

  // 计算属性： 当前手指滑动发生时，根据结束下标 - 开始下标，来推导出滑动方向
  const direction = useMemo<string>(() => { // 当前手指滑动方向
    if (!distance) {
      return ''
    }
    // 根据当前偏移的y和x的绝对值（即两个坐标轴上的投影），来判定当前方向是y轴还是x轴
    const { x, y } = distance
    if (Math.abs(x) > Math.abs(y)) { // 属于x轴位移
      return x > 0 ? 'right' : 'left'
    } else { // 属于y轴位移
      return y > 0 ? 'down' : 'up'
    }
  }, [start, end])
  
  // 卸载后，给绑定的Dom移除手指触碰的事件监听: touchstart、touchmove、touchend
  const handleUnMount = () => { 
    if (!element.current) {
      return
    }
    element.current!.removeEventListener('touchstart', handleTouchStart)
    element.current!.removeEventListener('touchmove', handleTouchMove)
    element.current!.removeEventListener('touchend', handleTouchEnd)
  }

  useEffect(() => {
    if (!element.current) {
      return
    }
    // 挂载后，给绑定的Dom添加手指触碰的事件监听: touchstart、touchmove、touchend
    element.current!.addEventListener('touchstart', handleTouchStart)
    element.current!.addEventListener('touchmove', handleTouchMove)
    element.current!.addEventListener('touchend', handleTouchEnd)
    return handleUnMount
  }, [])

  return {
    direction,
    swiping,    
  }
}