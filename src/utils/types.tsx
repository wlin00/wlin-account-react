import { ReactNode } from 'react';

export type Tag = {
  id: number
  user_id: number
  name: string,
  sign: string,
  kind: 'expenses' | 'income'
}

export type Item = {
  id: number
  user_id: number
  name: string,
  happen_at: string,
  sign: string,
  kind: 'expenses' | 'income'
  amount: number,
  tags_id: Array<number>,
  isTouchMove?: boolean | undefined,
  created_at: string,
  tags: Tag[],
  // "note": null,
}

export type ItemTagSummary = { // 以tag为聚合条件的整合账单列表
  amount: number
  tag_id: number
  tags: Tag[]
}

export type ItemDateSummary = {
  amount: number
  happen_at: string
  tags: any
}

export type  ResourceSummary<T = any> = {
  groups: T,
  total: number
}

export type Resources<T = any> = {
  resource: T[]
  pager: {
    page: number,
    per_page: number,
    count: number
  }
}

export type Resource<T = any> = {
  resource: T
}

export type Summary = {
  expenses: string,
  income: string,
  profit: string
}

export type User = {
  name: string,
  email: string
}

export interface ICurrentTab {
  thisMonth: string
  lastMonth: string
  thisYear: string
  custom: string
}

export interface IPaymentTab {
  expenses: string
  income: string
}

export type TimeTabItem = {
  key: keyof ICurrentTab
  text: string
  element?: ReactNode
}

export type PaymentTabItem = {
  key: keyof IPaymentTab
  text: string
  element?: ReactNode
}

export type FormData = {
  email: string,
  code: string
}

export type JSONValue = string | number | boolean | null | { [k: string]: JSONValue } | JSONValue[]