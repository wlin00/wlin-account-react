import * as React from 'react'
interface Props {
  className?: string
}

export const CurrentUser: React.FC<Props> = ({ className }) => {
  return (
    <div
      bg="#39f" text-white w="100%" pt-32px pb-44px px-16px
      className={className}
    >
      <h2 text-24px>未登录用户</h2>
      <div text-white>点击这里登录</div>
    </div>
  )
}