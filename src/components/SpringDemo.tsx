import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import { useState } from 'react';

export const SpringDemo: React.FC = () => {
  const [x, setX] = useState(0)
  const [springs, api] = useSpring(() => ({
    from: { x: 0 }
  }))
  const onClick = () => {
    api.start({
      from: { x },
      to: { x: 100 + x }
    })
    setX((preX: number) => preX + 100)
  }
  return (
    <animated.div
      onClick={onClick}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs
      }}
    ></animated.div>
  )
}