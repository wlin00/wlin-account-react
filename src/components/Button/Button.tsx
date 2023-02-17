import * as React from 'react'
import './Button.scss'

interface Props {
  type?: 'button' | 'submit',
  onClick?: (e: React.MouseEvent) => void,
  disabled?: boolean,
  level?: 'important' | 'normal' | 'danger'
  className?: string,
  children?: any
}

export const Button: React.FC<Props> = ({ children, type = 'button', level, onClick, disabled, className }: any) => {
  return (
    <button
      p-8px pt-16px pb-16px border-1px text-white text-18px rounded-8px h-48px inline-flex justify-center items-center
      className={['custom-button', 'b-#39f','bg-#39f', `${level}`, className].join(' ')}
      type={type}
      disabled={disabled}
      onClick={onClick || null}
    >{ children }</button>
  )
}

Button.defaultProps = {
  level: 'important'
}