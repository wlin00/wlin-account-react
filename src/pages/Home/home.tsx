import * as React from 'react'
import { Button } from '../../components/Button/Button';
import { useCountDown } from '../../hooks/useCountDown';
import { useMemo } from 'react';
const COUNTDOWN = 10

export const Home: React.FC = () => {
  const { count, pending, startCountDown } = useCountDown(COUNTDOWN)
  const countDownBtnDisplay = useMemo(() => {
    return !pending ? '发送验证码' : `${count}秒后可重新发送`
  }, [count, pending])
  const handleClick = () => {
    startCountDown() // 开始倒计时
  }
  return (
    <div>
      <Button disabled={pending} onClick={handleClick} type="button">{countDownBtnDisplay}</Button>
    </div>
  )
}