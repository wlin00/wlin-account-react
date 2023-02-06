import * as React from 'react'

interface Props {
  name?: string,
  onClick?: (e: MouseEvent) => void
}

export const Icon: React.FC<Props> = ({ onClick, name }: any) => {
  return (
    <svg className={'w-1.6em h-1.6em'} onClick={onClick} >
      <use xlinkHref={'#' + name}></use>
    </svg>
  )
}

Icon.defaultProps = {
  name: 'add'
}