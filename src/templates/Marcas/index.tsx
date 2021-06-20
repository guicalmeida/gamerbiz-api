import Description from 'components/description'
import Image from 'components/Image'
import ItemTitle from 'components/ItemTitle'
import SectionTitle from 'components/SectionTitle'
import Xis from 'components/Xis'
import { MarcasProps } from 'types/api'
import * as S from './styles'

type MarcasComponentProps = {
  marcas: MarcasProps
}

const Marcas = ({ marcas }: MarcasComponentProps) => {
  return (
    <S.Container id="marcas" className="section">
      <S.HeadWrapper>
        <SectionTitle>{marcas.titulo}</SectionTitle>
        <Description M>{marcas.descricao}</Description>
      </S.HeadWrapper>
      <S.ServicosWrapper>
        <S.ServicosColUm>
          <S.ServicoLeft>
            <Image escudo={marcas.Servico[0].escudo} />
            <S.ServicoInfo>
              <ItemTitle>{marcas.Servico[0].titulo}</ItemTitle>
              <Description>{marcas.Servico[0].descricao}</Description>
            </S.ServicoInfo>
          </S.ServicoLeft>
          <S.ServicoLeft>
            <Image escudo={marcas.Servico[1].escudo} />
            <S.ServicoInfo>
              <ItemTitle>{marcas.Servico[1].titulo}</ItemTitle>
              <Description>{marcas.Servico[1].descricao}</Description>
            </S.ServicoInfo>
          </S.ServicoLeft>
        </S.ServicosColUm>
        <S.ServicosX>
          <Xis />
        </S.ServicosX>
        <S.ServicosColDois>
          <S.ServicoRight>
            <Image escudo={marcas.Servico[2].escudo} />
            <S.ServicoInfo>
              <ItemTitle>{marcas.Servico[2].titulo}</ItemTitle>
              <Description>{marcas.Servico[2].descricao}</Description>
            </S.ServicoInfo>
          </S.ServicoRight>
          <S.ServicoRight>
            <Image escudo={marcas.Servico[3].escudo} />
            <S.ServicoInfo>
              <ItemTitle>{marcas.Servico[3].titulo}</ItemTitle>
              <Description>{marcas.Servico[3].descricao}</Description>
            </S.ServicoInfo>
          </S.ServicoRight>
        </S.ServicosColDois>
      </S.ServicosWrapper>
      <S.ClientesWrapper>
        <ItemTitle>{marcas.tituloClientes}</ItemTitle>
        <S.LogosContainer>
          {marcas.clientes.map((cliente) => {
            return (
              <S.ClientLogoWrapper key={cliente.nome}>
                <Image escudo={cliente.logo} bw />
              </S.ClientLogoWrapper>
            )
          })}
        </S.LogosContainer>
      </S.ClientesWrapper>
    </S.Container>
  )
}

export default Marcas
