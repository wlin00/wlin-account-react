import * as React from 'react'
import { NavLink } from 'react-router-dom';

export const Welcome4: React.FC = () => {
  return (
    <div style={{ border: '1px solid red' }}> 4 <NavLink to="/start">完成</NavLink> </div>
  )
}