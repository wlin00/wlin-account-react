import { useState, useEffect } from 'react'
export const useCountDown = (seconds: number = 60) => {
  const [count, setCount] = useState<number>(seconds)
  const [pending, setPending] = useState<boolean>(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const startCountDown = () => {
    setPending(true)
  }
  const stopCountDown = () => {
    setPending(false)
  }
  const resetCountDown = () => {
    setPending(false)
    setCount(seconds)
  }
  useEffect(() => {
    if (!pending) {
      return
    }
    if (count < 1) {
      resetCountDown()
      return
    }
    setTimer(
      setTimeout(() => {
        setCount(count - 1)
      }, 1000)
    )
    return () => clearTimeout(timer!)
  }, [count, pending])

  return {
    count,
    pending,
    startCountDown,
    stopCountDown,
    resetCountDown,
  }
}