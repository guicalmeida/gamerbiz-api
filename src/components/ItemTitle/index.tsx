import { ReactNode } from 'react'
import * as S from './styles'

export type ItemTitleProps = {
  children: ReactNode
}

const ItemTitle = ({ children }: ItemTitleProps) => {
  return <S.ItemTitle>{children}</S.ItemTitle>
}

export default ItemTitle
