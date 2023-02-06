import * as React from 'react'
import { Button } from '../../components/Button';

export const Home: React.FC = () => {
  const handleClick = () => {
    console.log('111')
  }
  return (
    <div>
      <Button onClick={handleClick} type="button">123</Button>
    </div>
  )
}