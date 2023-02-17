import * as React from 'react'
import s from './SigninPage.module.scss'
import { Topnav } from '../../components/Topnav/Topnav';
import { Icon } from '../../components/CustomIcon';
import { EventRef, Form, FormItem } from '../../components/Form/Form';
import { Button } from '../../components/Button/Button';
import { useState, useRef, useMemo } from 'react';
import { FormData } from '../../utils/types';
import { FormError, validate, Rules, Rule, hasError } from '../../utils/validate';
import { ajax } from '../../utils/ajax';
import { useCountDown } from '../../hooks/useCountDown';

const COUNTDOWN = 60
const rules: Rules<FormData> = [
  { key: 'email', type: 'required', message: '请输入邮箱'  },
  { key: 'email', type: 'pattern', message: '请输入正确的邮箱格式', regex: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ },
  { key: 'code', type: 'required', message: '请输入验证码'  },
  { key: 'code', type: 'pattern', message: '请输入6位数字验证码', regex: /^\d{6}$/ },
]

export const SigninPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ // 表单数据
    email: '',
    code: ''
  })
  const formRef = useRef({} as EventRef)
  const [errors, setErrors] = useState<FormError<FormData>>({
    email: [],
    code: [],
  })
  const { count, pending, startCountDown } = useCountDown(COUNTDOWN)

  const countDownBtnDisplay = useMemo(() => {
    return !pending ? '请输入验证码' : `${count}秒后可重新发送`
  }, [pending, count])

  const handleIconClick = () => {
    history.back()
  }
  const handleSubmit = (e?: any) => {
    e?.preventDefault()
    // 调用表单校验方法
    handleFormCheck(formData)
    // 校验表单是否还有错误，如果有则不发送请求
    setErrors((newErrors) => {
      if (!hasError(newErrors)) {
        console.log('pass & submit')
      }
      return newErrors
    })
  }
  const handleFormChange = (validationCode: keyof FormData, value: string | number) => {
    setFormData((formData: any) => ({ ...formData, [`${validationCode}`]: value }))
    setFormData((data) => {
      handleFormCheck(data, validationCode) // 表单数据更新后，触发局部表单校验
      return data
    })
  }
  const handleFormCheck = async (data: FormData, validateField?: keyof FormData) => { // 表单校验的trigger方法
    if (!validateField) { // 全量表单校验
      const currentError = validate(data, rules)
      setErrors(currentError)
    } else { // 局部校验
      // 获取局部校验的规则
      const filterRules: Rules<FormData> = rules.filter((item: Rule<FormData>) => item.key === validateField)
      const currentError = {
        ...errors, 
        [`${validateField}`]: validate(data, filterRules)[validateField],
      }
      setErrors(currentError)
    }
  }
  const handleCountDownValidate = () => {
    handleFormCheck(formData, 'email')
    setErrors((newErrors: any) => {
      console.log('nnn', newErrors)
      if (!newErrors?.['email']?.length) {
        handleSendValidationCode()
      }
      return newErrors
    })    
  }
  const handleSendValidationCode = async () => {
    try { 
      // await ajax.post('/api/v1/validation_codes', {  email: formData.email })
      // 调用验证码接口后，开始60秒倒计时
      startCountDown()
    } catch(err) {
    }
  }


  return (
    <div className={s.wrap}>
      <div className={[s.topWrap].join(' ')}>
        <Topnav title="登录" icon={
          <Icon name="left" onClick={handleIconClick} />
        } />
      </div>
      <div className={s.wrapper}>
        <div flex-c flex-col pt-42px>
          <Icon className="w-64px h-68px" name="mangosteen" />
          <h1 font-bold color="[var(--app-name-text)]">Wlin记账</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormItem 
            label='邮箱地址'
            type='text'
            validateCode='email'
            errors={errors}
            placeholder='请输入邮箱，然后发送验证码'
            value={formData.email}
            onChange={(value) => handleFormChange('email', value)}
            errorItem={errors['email']}
            onValidate={(validateField: any) => handleFormCheck(validateField)}
          />
          <FormItem 
            label='验证码'
            eventRef={formRef}
            type='validationCode'
            validateCode='code'
            placeholder='请输入验证码'
            value={formData.code}
            onChange={(value) => handleFormChange('code', value)}
            errors={errors}
            errorItem={errors['code']}
            onValidate={(validateField: any) => handleFormCheck(validateField)}
            action={
              <Button
                onClick={handleCountDownValidate}
                disabled={pending}
                className={['max-w-100%', 'min-h-[var(--input-min-height)]', 'w-100%', 'ml-16px'].join(' ')}
              >{countDownBtnDisplay}</Button>
            }
          />
          <div w="100%" box-border mt-60px>
            <Button onClick={handleSubmit} className="w-100%">登录</Button>
          </div>
        </Form>

      </div>
      

    </div>
  )
}