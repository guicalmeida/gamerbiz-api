import Button from 'components/Button'
import Description from 'components/description'
import Image from 'components/Image'
import SectionTitle from 'components/SectionTitle'
import { SobreProps } from 'types/api'
import * as S from './styles'

type SobreComponentProps = {
  sobre: SobreProps
}

const Sobre = ({ sobre }: SobreComponentProps) => {
  return (
    <S.Container className="section" id="sobre">
      <S.TextWrapper>
        <SectionTitle M>{sobre.titulo}</SectionTitle>
        <Description L>{sobre.descricao}</Description>
        <Button>{sobre.botao.texto}</Button>
      </S.TextWrapper>
      <S.EscudoWrapper>
        <Image escudo={sobre.escudo} />
        <S.NeonWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 475 919"
          >
            <defs />
            <g stroke="#fff" strokeWidth="12" filter="url(#filter999_di)">
              <path d="M456 19H19v46.63h437V19z" />
              <path
                d="M19 734.34V110.51h437v623.83L237.06 898 19 734.34z"
                clipRule="evenodd"
              />
              <path d="M371.59 189.7H102.53v84.47h155.63l-155.63 117.9v109.98L371.6 300.56V189.7zM102.53 656.91V546.93L371.6 346.32v109.1l-269.06 201.5zM288.06 565.4v173.34l83.53-62.47V502.05l-83.53 63.35z" />
            </g>
            <defs>
              <filter
                id="filter999_di"
                width="475"
                height="918.5"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="shape" result="effect2_innerShadow" />
              </filter>
            </defs>
          </svg>
        </S.NeonWrapper>
      </S.EscudoWrapper>
    </S.Container>
  )
}

export default Sobre
