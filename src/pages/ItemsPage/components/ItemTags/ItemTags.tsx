import * as React from 'react'
import { IPaymentTab } from '../../../../utils/types';
import { Icon } from '../../../../components/Icon';

interface Props {
  kind: keyof IPaymentTab
}

export const ItemTags: React.FC<Props> = ({ kind='expenses' }) => {
  const tags = Array.from({ length: 91 })
  return (
    <div>
        <ol grid grid-cols="[repeat(auto-fit,48px)]" justify-center gap-x-32px
        bg-white
        gap-y-16px py-16px px-8px>
        <li>
          <span block w-48px h-48px rounded="24px" bg="#EFEFEF"
            flex justify-center items-center text-24px text="#39f"
          ><Icon name="add" /></span>
        </li>
        {tags.map((tag, index) =>
          <li key={index} w-48px flex justify-center items-center flex-col gap-y-8px>
            <span block w-48px h-48px rounded="24px" bg="#EFEFEF"
              flex justify-center items-center text-24px b-1 b="#39f">😶</span>
            <span text-12px text="#666">打车</span>
          </li>
        )}
      </ol>
    </div>
  )
}