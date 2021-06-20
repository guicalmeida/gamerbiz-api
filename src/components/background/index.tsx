import { ReactNode } from 'react'
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

export type BackgroundProps = {
  imagemDeFundo: {
    url: string
  }
  children: ReactNode
}

const Background = ({ imagemDeFundo, children }: BackgroundProps) => {
  return (
    <S.BGImg imgSrc={imagemDeFundo.url ? getImageUrl(imagemDeFundo.url) : ''}>
      {children}
    </S.BGImg>
  )
}

export default Background
