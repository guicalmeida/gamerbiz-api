import { ReactNode } from 'react'
import * as S from './styles'
import parse from 'html-react-parser'

export type SectionTitleProps = {
  children: ReactNode
  L?: boolean
  M?: boolean
  className?: string
}

const SectionTitle = ({ children, L, M, className }: SectionTitleProps) => {
  return (
    <S.Container L={L} M={M} className={className}>
      {parse(`${children}`)}
    </S.Container>
  )
}

export default SectionTitle
