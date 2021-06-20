import { ReactNode } from 'react'

type ButtonProps = {
  texto: string
  url?: string
}

type ImageProps = {
  url: string
  name: string
}

type CaixaDeTextoProps = {
  titulo: string
  descricao: ReactNode
}[]

export type HeaderProps = {
  titulo: string
  descricao: ReactNode
  imagemDeFundo: ImageProps
}

export type SobreProps = {
  botao: ButtonProps
  escudo: ImageProps
  descricao: ReactNode
  titulo: ReactNode
}

export type MarcasProps = {
  Servico: {
    titulo: ReactNode
    descricao: ReactNode
    escudo: ImageProps
  }[]
  tituloClientes: ReactNode
  clientes: {
    nome: string
    logo: ImageProps
  }[]
  descricao: ReactNode
  titulo: ReactNode
}

export type TimesProps = {
  caixaDeTexto: CaixaDeTextoProps
  botao: ButtonProps
  camiseta: ImageProps
}

export type ConteudoProps = {
  caixaDeTexto: CaixaDeTextoProps
  botao: ButtonProps
  titulo: ReactNode
}

export type AtletaProps = {
  descricao: ReactNode
  botao: ButtonProps
  titulo: ReactNode
  Jogador: {
    nome: string
    eSport: string
    time: string
    foto: ImageProps
  }[]
}

export type ContatoProps = {
  titulo: ReactNode
  email: string
  logo: ImageProps
  redesSociais: {
    rede: string
    url: string
    icone: ImageProps
  }[]
}

export type TrabalhoProps = {
  titulo: ReactNode
  ativar: boolean
  cases: {
    titulo: string
    texto: ReactNode
    Galeria: ImageProps[]
  }[]
}

export type FrontPageProps = {
  header: HeaderProps
  sobre: SobreProps
  marcas: MarcasProps
  times: TimesProps
  produtorDeConteudo: ConteudoProps
  atleta: AtletaProps
  trabalhos: TrabalhoProps
  contato: ContatoProps
}
