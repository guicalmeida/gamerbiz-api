import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

type ImageProps = {
  escudo: {
    url: string
  }
}

export type ClienteProps = {
  bw?: boolean
}

const Image = ({ escudo, bw }: ImageProps & ClienteProps) => {
  console.log(escudo ? getImageUrl(escudo.url) : 'nulo')
  return <S.Img src={escudo ? getImageUrl(escudo.url) : ''} bw={bw} />
}

export default Image
