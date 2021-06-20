import { ReactNode } from 'react'
import * as S from './styles'

type TitleProps = {
  children: ReactNode
}

const HeaderTitle = ({ children }: TitleProps) => {
  return <S.HeaderTitle>{children} </S.HeaderTitle>
}

export default HeaderTitle
