import * as React from 'react'
import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import type { ReactNode } from 'react'

interface Props {
  visible: boolean
  onClickMask?: () => void
  children?: ReactNode
} 

export const Popup: React.FC<Props> = ({ visible, children, onClickMask }) => {
  const [maskVisible, setMaskVisible] = useState(visible) // maskVisible变量 用于在蒙层动画淡出时，opacity在<0.1的情况下再隐藏蒙层（确保淡出动画的完整性）
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 200 },
    onStart: ({ value }) => {
      if (value.opacity < 0.1) { setMaskVisible(true) }
    },
    onRest: ({ value }) => {
      if (value.opacity < 0.1) { setMaskVisible(false) }
    }
  })
  // 蒙层动画
  const styles = {
    ...maskStyles,
    visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
  } // workaround
  // 面板动画
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 300 },
    transform: visible ? 'translateY(0%)' : 'translateY(100%)',
  })

  return (
    <div touch-none>
      <animated.div fixed top-0 left-0 h-full w-full className="bg-black:75"
        style={styles} z="[calc(var(--z-popup)-1)]" onClick={() => onClickMask?.()}
      />
      <animated.div fixed bottom-0 left-0 w-full min-h-100px bg-white
        style={menuStyles} rounded-t-8px overflow-hidden
        z="[calc(var(--z-popup))]"
      >
        {children}
      </animated.div>
    </div>
  )
}