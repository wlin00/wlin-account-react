import * as React from 'react'
import { IPaymentTab, PaymentTabItem } from '../../utils/types';
import { Tabs } from '../Tabs/Tabs';

interface Props {
  onChange: (value: keyof IPaymentTab) => void,
  value: keyof IPaymentTab
}

const tabArr: PaymentTabItem[] = [
  { key: 'expenses', text: '支出' },
  { key: 'income', text: '收入' },
]

export const PaymentTabs: React.FC<Props> = ({ value, onChange }) => {

  return (
    <Tabs textMode='center' value={value} onChange={onChange} tabItems={tabArr} />
  )
}