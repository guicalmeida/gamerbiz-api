import * as S from './styles'

export type ButtonProps = {
  M?: boolean
  L?: boolean
  children: string
  url?: string
}

const Button = ({ children, L, M, url }: ButtonProps) => {
  return (
    <a href={url ? url : '#contato'}>
      <S.Button M={M} L={L}>
        {children}
      </S.Button>
    </a>
  )
}

export default Button
