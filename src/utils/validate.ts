// 自封装表单校验方法
export type Rule<T> = {
  key: keyof T,
  message: string
} & (
  { type: 'required' } // 必填型校验规则
  | { type: 'pattern', regex: RegExp } // 正则型校验规则
)

export type Rules<T> = Rule<T>[]

// 定义表单相关接口
export interface IFormData {
  [key: string]: null | undefined | string | number | IFormData
}

// 表单错误类型
export type FormError<T> = {
  [key in keyof T]?: string[]
}

// 暴露表单校验方法
export const validate = <T extends IFormData>(formData: T, rules: Rules<T>) => {
  // 表单校验方法，返回校验后的错误对象, 若无错误则为 { key: [] }的结构
  const validateError: FormError<T> = {}
  rules.map((rule: Rule<T>) => {
    const { key, message, type } = rule
    const value = formData[key] // 获取当前需要校验的表单值
    switch (type) {
      case 'required': // 必填型校验
        if (isEmpty(value)) {
          if (!validateError[key]) {
            validateError[key] = []
          }
          validateError[key]?.push(message)
        }
        break;  
      case 'pattern': // 正则型校验
        const regex = rule.regex
        if (!isEmpty(value) && !regex.test(value!.toString())) {
          if (!validateError[key]) {
            validateError[key] = []
          }
          validateError[key]?.push(message)
        }
        break;
      default:
        return    
    }
  })
  return validateError 

}

function isEmpty(value: null | undefined | string | number | IFormData) {
  return value === null || value === undefined || value === ''
}

export function hasError(errors: Record<string, string[]>) { // 校验当前表单是否存在错误
  let flag = false
  const keys = Object.keys(errors)
  for (let i = 0; i < keys.length; i++) {
    if (errors[keys[i]]?.length) {
      flag = true
      break
    }
  }
  return flag
}

