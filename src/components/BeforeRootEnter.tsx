import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { useStorageStore } from '../stores/useStorageStore';

export const BeforeRootEnter: React.FC = () => {
  const { hasRead } = useStorageStore()
  return (
    hasRead
      ? <Navigate to="/start"/> 
      : <Navigate to="/welcome"/>
  )
}