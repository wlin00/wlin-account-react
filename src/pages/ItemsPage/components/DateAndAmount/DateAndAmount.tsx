import * as React from 'react'
import { useState } from 'react';

interface Props {
  className?: string
}

export const DateAndAmount: React.FC<Props> = ({ className }) => {
  const [x, setX] = useState()
  return (
    <div b-1 b-blue className={className}>
      <input value={x} onChange={(e:any) => setX(e.target.value)} />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
      DateAndAmount <br />
    </div>
  )
}