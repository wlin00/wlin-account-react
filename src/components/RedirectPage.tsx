import * as React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectPage: React.FC = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])
  return null
}