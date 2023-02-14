import create from 'zustand'

interface IMenuStore {
  visible: boolean,
  setVisible: (flag?: boolean) => void
}

export const useMenuStore = create<IMenuStore>((set) => ({
  visible: false,
  setVisible: (val: boolean = true) => {
    set(() => ({
      visible: val
    }))
  }
}))