import * as React from 'react'
import s from './ItemsPage.module.scss'
import { Topnav } from '../../components/Topnav/Topnav';
import { TimeRangePicker } from '../../components/TimeRangePicker/TimeRangePicker';
import { ItemsSummary } from './components/ItemsSummary/ItemsSummary';
import { ItemsList } from './components/ItemsList/ItemsList';
import { AddItemFloatButton } from '../../components/AddItemFloatButton';
import { useState } from 'react';
import { ICurrentTab, Item } from '../../utils/types';
import { TopMenu } from '../../components/TopMenu/TopMenu';
import { useMenuStore } from '../../stores/useMenuStore';
import { Icon } from '../../components/CustomIcon';
import { useNavigate } from 'react-router-dom';

export const ItemsPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<keyof ICurrentTab>('thisMonth')
  const { setVisible, visible } = useMenuStore()
  const nav = useNavigate()

  const handleClick = () => {
    // 点击后通信zustand仓库，唤起左侧滑动菜单组件
    setVisible(!visible)
  }

  const handleAddBtnClick = () => {
    nav('/items/create')
  }
  
  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav title="Wlin记账" icon={
          <Icon name="menu" onClick={handleClick} />
        } />
        <TimeRangePicker value={currentTab} onChange={setCurrentTab} />
      </div>

      <AddItemFloatButton icon="add" onClick={handleAddBtnClick} />
      <TopMenu />
    </div>
  )
}