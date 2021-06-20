import { ReactNode } from 'react'
import parse from 'html-react-parser'
import * as S from './styles'

export type DescProps = {
  children: ReactNode
  L?: boolean
  M?: boolean
}

const Description = ({ children, L, M }: DescProps) => {
  return (
    <S.Container L={L} M={M}>
      {parse(`${children}`)}
    </S.Container>
  )
}

export default Description
