import * as React from 'react'
// import s from './Icon.module.scss'
interface Props {
  onClick?: () => void,
  name?: string,
  className?: string
}

export const Icon: React.FC<Props> = ({ onClick, name = 'add', className }) => {
  return (
    <svg
      // @ts-ignore
      onClick={onClick || null}
      className={['wlin-custom-icon', className].join(' ')}
    >
      <use xlinkHref={'#' + name}></use>
    </svg>
  )
}