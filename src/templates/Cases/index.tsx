import SectionTitle from 'components/SectionTitle'
import { TrabalhoProps } from 'types/api'
import * as S from './styles'
import Slider from 'react-slick'
import Image from 'components/Image'
import Modal from 'react-modal'
import parse from 'html-react-parser'
import { useState } from 'react'
import ShapesWrapper from 'components/ShapesWrapper'

type trabalhoSectionProps = {
  trabalhos: TrabalhoProps
}

const Cases = ({ trabalhos }: trabalhoSectionProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <S.Container className="section" id="cases" show={trabalhos.ativar}>
      <S.Mesh
        src="https://gamerbiz.s3.us-east-2.amazonaws.com/mesh_7bf5c9b449.webp"
        className="normal"
      />
      <S.Mesh
        src="https://gamerbiz.s3.us-east-2.amazonaws.com/mesh_7bf5c9b449.webp"
        className="rotate"
      />

      <SectionTitle M>{trabalhos.titulo}</SectionTitle>
      <S.SliderWrapper>
        <Slider {...settings}>
          {trabalhos.cases.map((trabalho) => {
            return (
              <S.CaseDiv key={trabalho.titulo}>
                <Image escudo={trabalho.Galeria[0]} />
                <S.CaseTxtCard>
                  <h3>{trabalho.titulo}</h3>
                  <S.Sinopse>
                    {`${trabalho.texto}`.slice(3, 300)}...
                    <S.OpenCase onClick={openModal}> Leia mais</S.OpenCase>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={{
                        overlay: {
                          position: 'fixed',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: '#21120713',
                          margin: 'auto',
                          zIndex: 1000
                        },
                        content: {
                          position: 'absolute',
                          top: '40px',
                          left: '40px',
                          right: '40px',
                          bottom: '40px',
                          border: '1px solid #fc66035b',
                          background: '#060606fa',
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                          borderRadius: '10px',
                          outline: 'none',
                          margin: '2.5% 10%',
                          zIndex: 1001,
                          padding: ' 2% 5%'
                        }
                      }}
                      portalClassName="overlayElement"
                    >
                      <S.ModalContainer>
                        <S.Close onClick={closeModal}>X</S.Close>
                        <h3>{trabalho.titulo}</h3>
                        <S.CaseGalerySlider>
                          <Slider {...settings}>
                            {trabalho.Galeria.length
                              ? trabalho.Galeria.map((foto) => {
                                  return (
                                    <S.ImageWrapper key={foto.name}>
                                      <Image escudo={foto} />
                                    </S.ImageWrapper>
                                  )
                                })
                              : undefined}
                          </Slider>
                        </S.CaseGalerySlider>
                        <div>{parse(`${trabalho.texto}`)}</div>
                      </S.ModalContainer>
                    </Modal>
                  </S.Sinopse>
                </S.CaseTxtCard>
              </S.CaseDiv>
            )
          })}
        </Slider>
      </S.SliderWrapper>
      <S.ShapesBG>
        <ShapesWrapper />
      </S.ShapesBG>
    </S.Container>
  )
}

export default Cases
