import * as React from 'react'
import { useMemo, MutableRefObject, useImperativeHandle, useEffect, ReactNode } from 'react';
import { Button } from '../Button/Button';
import s from './Form.module.scss'
import { useCountDown } from '../../hooks/useCountDown';

export type EventRef = {
  startCountDown: () => void
}
interface FormProps {
  onSubmit: () => void,
  children?: any
}
interface FormItemProps {
  value?: string | number,
  label?: string,
  validateCode?: string,
  placeholder?: string,
  type?: 'text' | 'emoji' | 'date' | 'validationCode' | 'select'
  errors?: object,
  errorItem?: any[],
  options?: { value: string, text: string }[],
  children?: any,
  ref?: any,
  eventRef?: MutableRefObject<EventRef>,
  action?: ReactNode,
  onChange?: (val: string | number) => void,
  onValidate?: (validationCode: string | undefined) => void,
}


export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form
      p-16px
      onSubmit={onSubmit}
    >{children}</form>
  )
}

export const FormItem: React.FC<FormItemProps> = ({ 
  value, label, validateCode, placeholder, type, errors = {}, errorItem = [], options = [], children, eventRef, action,
  onChange,
 }) => {


  const handleInputText = (e: any) => { // text类型FormItem的input操作
    onChange?.(e.target.value)
  }

  // 获取当前应渲染的formItem的ReactDom
  const content = useMemo(() => {
    switch (type) {
      case 'text':
        return <input 
          type="text" 
          maxLength={50}
          value={value}
          onInput={handleInputText}
          placeholder={placeholder}
          className={[s.formItem, s.input, `${errorItem?.length ? s.error: ''}`].join(' ')}
        />
      case 'validationCode':
        return <>
          <input 
            type="text" 
            maxLength={10}
            placeholder={placeholder}
            value={value}
            onInput={handleInputText}
            className={[s.formItem, s.input, s.validationCodeInput, `${errorItem?.length ? s.error : ''}`].join(' ')}
          />
          {action ? action : null}
          {/* <Button
            onClick={handleSendValidationCode}
            disabled={pending}
            className={[s.formItem, s.button, s.validationCodeButton].join(' ')}
          >{countDownBtnDisplay}</Button> */}
        </>  
      default:
        return children 
    }
  }, [type, value, errorItem, placeholder, options, validateCode, label])

  return (
    <div className={s.formRow}>
      <label className={s.formLabel}>
        {
          label ? (
            <span className={s.formItem_name}>
              <span>{label}</span>
              { type === 'emoji' && <span className={s.emojiIcon}>{value}</span>}
            </span>
          ) : null
        }
        <div className={[
          s.formItem_value, 
          // @ts-ignore
          `${!['text', 'emoji', 'date', 'validationCode'].includes(type) 
          ? s.formItem_default: ''}`].join(' ')}>
          {content}
        </div>
        <div className={[
          s.formItem_errorHint, 
          // @ts-ignore
          `${!['text', 'emoji', 'date', 'validationCode'].includes(type) 
          ? s.formItem_errorHint_none: ''}`].join(' ')}>
          <span>{errorItem?.length ? errorItem?.[0] : ''}</span>
        </div>
      </label>
    </div>
  )
}