import * as React from 'react'
import { CurrentUser } from './components/CurrentUser'
import { MenuList } from './components/MenuList';
import { useMenuStore } from '../../stores/useMenuStore';
import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';

export const TopMenu: React.FC = () => {
  const { setVisible, visible } = useMenuStore()
  const [maskVisible, setMaskVisible] = useState(visible)
  const handleMaskClick = () => {
    setVisible(false)
  }
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 300 },
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
    transform: visible ? 'translateX(0%)' : 'translateX(-100%)',
  })

  return (
    <>
      <animated.div fixed top-0 left-0 w="100%" h="100%" className="bg-black:75"
        style={styles} z="[calc(var(--z-menu)-1)]" onClick={handleMaskClick}
      />
      <animated.div fixed top-0 left-0 w="70vw" max-w-20em h-screen flex flex-col
        style={menuStyles}
        z="[var(--z-menu)]">
        <CurrentUser className="grow-0 shrink-0" />
        <MenuList className="grow-1 shrink-1" />
      </animated.div>
    </>
  
  )
}