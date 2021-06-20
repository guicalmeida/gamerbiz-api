import Image from 'components/Image'
import { ContatoProps } from 'types/api'
import * as S from './styles'

type ContatoSectionProps = {
  contato: ContatoProps
}

const Contato = ({ contato }: ContatoSectionProps) => {
  return (
    <S.Container className="section" id="contato">
      <S.ContentWrapper>
        <S.InfosWrapper>
          <h2>{contato.titulo}</h2>

          <Image escudo={contato.logo} />
          <p>{contato.email}</p>
          <S.SocialWrapper>
            {contato.redesSociais.map((rede) => {
              return (
                <S.SocialLink
                  href={rede.url}
                  key={rede.rede}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image escudo={rede.icone} />
                </S.SocialLink>
              )
            })}
          </S.SocialWrapper>
        </S.InfosWrapper>
        <S.FormWrapper>
          <form
            name="contatoRodape"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <S.Input type="hidden" name="form-name" value="contatoRodape" />
            <div>
              <S.Label>
                Nome
                <S.Input type="text" name="contatoRodape" required />
              </S.Label>
              <S.Label>
                E-mail
                <S.Input type="text" name="contatoRodape" required />
              </S.Label>
              <S.Label>
                Assunto
                <S.Input type="text" name="contatoRodape" required />
              </S.Label>
              <S.Label>
                Mensagem
                <S.TextArea
                  name="contatoRodape"
                  required
                  cols={50}
                  rows={8}
                  id="mensagem"
                />
              </S.Label>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <S.Submit type="submit"> Enviar</S.Submit>
          </form>
        </S.FormWrapper>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default Contato
