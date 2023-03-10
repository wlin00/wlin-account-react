import * as React from 'react'
interface Props {
  onClick?: () => void,
  name?: string,
  className?: string
}

export const Icon: React.FC<Props> = ({ onClick, name = 'add', className }) => {
  return (
    <span inline-flex w="1.2em" h='1.2em' className={className} >
      <svg
        // @ts-ignore
        onClick={onClick || null}
      >
        <use xlinkHref={'#' + name}></use>
      </svg>
    </span>
  )
}