import * as React from 'react'
import s from './SigninPage.module.scss'
import { Topnav } from '../../components/Topnav/Topnav';
import { Icon } from '../../components/CustomIcon';

export const SigninPage: React.FC = () => {
  const handleIconClick = () => {
    history.back()
  }
  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav title="登录" icon={
          <Icon name="left" onClick={handleIconClick} />
        } />
      </div>
      <div>
        <div flex-c flex-col pt-42px>
          <Icon className="w-64px h-68px" name="mangosteen" />
          <h1 font-bold color="[var(--app-name-text)]">Wlin记账</h1>
        </div>

      </div>
      

    </div>
  )
}