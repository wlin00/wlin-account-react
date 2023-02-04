import create from 'zustand'
interface IStorageStore {
  hasRead: boolean,
  changeHasRead: (flag?: boolean) => void
}

const hasReadInit = localStorage.getItem('hasRead')
export const useStorageStore = create<IStorageStore>((set) => ({ // 内置set方法用于写，即store中状态的修改
  hasRead: hasReadInit === '1',
  changeHasRead: (hasReadFlag: boolean = true) => {
    localStorage.setItem('hasRead', hasReadFlag ? '1' : '2') // 同步更新localStorage里的hasRead值
    return set(() => ({ hasRead: hasReadFlag })) // 修改仓库中的hasRead变量值
  }
}))