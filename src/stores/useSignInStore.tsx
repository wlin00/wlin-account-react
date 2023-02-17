import create from 'zustand'

type Data = {
  email: string
  code: string
}

interface SignIn {
  data: Data
  setData: (data: Partial<Data>) => void // Partial 可以把T中的属性变为可选
}

export const useSignInStore = create<SignIn>((set) => ({
  data: {
    email: '',
    code: ''
  },
  setData: (data: Partial<Data>) => {
    set(state => ({
      ...state,
      data: {
        ...state.data,
        ...data
      }
    }))
  }
}))