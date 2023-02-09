import { useState, useEffect } from 'react';
// react 倒计时hook，可供用户手动开启开关倒计时
export const useCountDown = (second: number = 60) => {
  const [countdown, setCountdown] = useState(second);
  const [isRunning, setIsRunning] = useState(false); // isRunning初始值 - 控制倒计时是否自动开始
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setCountdown(second);
    setIsRunning(false);
  };
  useEffect(() => {
    let timer: null | NodeJS.Timeout = null;
    if (!isRunning) { // timer && clearTimeout(timer)
      return
    }
    if (countdown < 1) {
      handleReset()
      return
    }
    timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer!);
  }, [isRunning, countdown]);
  return {
    countdown,
    isRunning,
    handleStart,
    handleStop,
    handleReset
  }
}