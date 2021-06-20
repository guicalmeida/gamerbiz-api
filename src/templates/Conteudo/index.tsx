import Button from 'components/Button'
import Description from 'components/description'
import ItemTitle from 'components/ItemTitle'
import OrbitAnima from 'components/OrbitAnima'
import SectionTitle from 'components/SectionTitle'
import { ConteudoProps } from 'types/api'
import * as S from './styles'

type ConteudoComponentProps = {
  produtorDeConteudo: ConteudoProps
}

const Conteudo = ({ produtorDeConteudo }: ConteudoComponentProps) => {
  return (
    <S.Container className="section" id="gamers">
      <S.EcosystemWrapper>
        <SectionTitle M className="titulo">
          {produtorDeConteudo.titulo}
        </SectionTitle>
        <OrbitAnima />
      </S.EcosystemWrapper>
      <S.RightColumn>
        <S.TextWrapper>
          <S.ServicoInfo>
            <ItemTitle>{produtorDeConteudo.caixaDeTexto[0].titulo}</ItemTitle>
            <Description L>
              {produtorDeConteudo.caixaDeTexto[0].descricao}
            </Description>
          </S.ServicoInfo>
          <S.ServicoInfo>
            <ItemTitle>{produtorDeConteudo.caixaDeTexto[1].titulo}</ItemTitle>
            <Description L>
              {produtorDeConteudo.caixaDeTexto[1].descricao}
            </Description>
          </S.ServicoInfo>
          <S.ServicoInfo>
            <ItemTitle>{produtorDeConteudo.caixaDeTexto[2].titulo}</ItemTitle>
            <Description L>
              {produtorDeConteudo.caixaDeTexto[2].descricao}
            </Description>
          </S.ServicoInfo>
        </S.TextWrapper>

        <Button L>FAÇA PARTE DA GAMERBIZ</Button>
      </S.RightColumn>
    </S.Container>
  )
}

export default Conteudo
