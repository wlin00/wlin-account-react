import * as React from 'react'
interface Props {
  type: string,
  onClick?: (e: React.MouseEvent) => void,
  children?: any
}

export const Button: React.FC<Props> = ({
  children,
  type,
  onClick
}: any) => {
  return (
    <button
      type={type}
      onClick={onClick || null}
    >{ children }</button>
  )
}