import type { ReactNode } from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Popup } from '../components/Popup/Popup';
import { rootDiv } from '../main';

export const usePopup  = (initVisible = false, children: ReactNode) => {
  const [visible, setVisible] = useState(initVisible)
  /**
   * ReactDOM.createPortal 是 React 提供的一种特殊的组件渲染方式，
   * 它允许将子组件渲染到父组件 DOM 树之外的 DOM 节点上，
   * 这种方式可以实现一些特殊的效果:
   *    例如在弹出框中渲染子组件;
   *    或者在某个全局容器中渲染通知组件等等.
   */
  const popup = ReactDOM.createPortal(
    <Popup visible={visible} onClickMask={() => setVisible(false)}>{children}</Popup>,
    rootDiv
  )
  const show = () => {
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }
  const toggle = () => {
    setVisible(!visible)
  }
  return {
    popup,
    show,
    hide,
    toggle,
  }
}