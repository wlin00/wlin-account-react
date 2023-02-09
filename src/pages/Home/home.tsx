import * as React from 'react'
import { Button } from '../../components/Button/Button';
import { useCountDown } from '../../hooks/useCountDown';
import { useMemo } from 'react';
const COUNTDOWN = 10

export const Home: React.FC = () => {
  const { countdown, isRunning, handleStart } = useCountDown(COUNTDOWN)
  const countDownBtnDisplay = useMemo(() => {
    return !isRunning ? '发送验证码' : `${countdown}秒后可重新发送`
  }, [countdown, isRunning])
  const handleClick = () => {
    handleStart() // 开始倒计时
  }
  return (
    <div>
      <Button disabled={isRunning} onClick={handleClick} type="button">{countDownBtnDisplay}</Button>
    </div>
  )
}