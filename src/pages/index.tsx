import client from 'graphql/client'
import GET_HOME from 'graphql/GetHome'
import { GetStaticProps } from 'next'
import Atletas from 'templates/Atletas'
import Cases from 'templates/Cases'
import Contato from 'templates/Contato'
import Conteudo from 'templates/Conteudo'
import Header from 'templates/Header'
import Marcas from 'templates/Marcas'
import Navbar from 'templates/Navbar'
import Sobre from 'templates/Sobre'
import Times from 'templates/Times'
import { FrontPageProps } from 'types/api'

export default function Home({
  header,
  atleta,
  trabalhos,
  contato,
  produtorDeConteudo,
  marcas,
  sobre,
  times
}: FrontPageProps) {
  return (
    <>
      <Navbar trabalhos={trabalhos} />
      <Header header={header} />
      <Sobre sobre={sobre} />
      <Marcas marcas={marcas} />
      <Times times={times} />
      <Atletas atleta={atleta} />
      <Conteudo produtorDeConteudo={produtorDeConteudo} />
      <Cases trabalhos={trabalhos} />
      <Contato contato={contato} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { frontPage } = await client.request(GET_HOME)
  return {
    props: {
      ...frontPage
    }
  }
}
