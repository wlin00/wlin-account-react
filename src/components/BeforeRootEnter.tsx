import * as React from 'react'
import { Navigate } from 'react-router-dom'

export const BeforeRootEnter: React.FC = () => {
  const hasRead = localStorage.getItem('hasRead')
  return (
    hasRead === '1' 
      ? <Navigate to="/start"/> 
      : <Navigate to="/welcome"/>
  )
}