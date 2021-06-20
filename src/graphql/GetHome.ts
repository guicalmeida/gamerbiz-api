const GET_HOME = /* GraphQL */ `
  query GET_HOME {
    frontPage {
      header {
        titulo
        descricao
        imagemDeFundo {
          url
          name
        }
      }
      sobre {
        botao {
          texto
          url
        }
        escudo {
          url
          name
        }
        descricao
        titulo
      }
      marcas {
        Servico {
          titulo
          descricao
          escudo {
            url
            name
          }
        }
        tituloClientes
        clientes {
          nome
          logo {
            name
            url
          }
        }
        descricao
        titulo
      }
      times {
        caixaDeTexto {
          titulo
          descricao
        }
        botao {
          texto
          url
        }
        camiseta {
          url
          name
        }
      }
      produtorDeConteudo {
        caixaDeTexto {
          titulo
          descricao
        }
        botao {
          texto
          url
        }
        titulo
      }
      atleta {
        descricao
        botao {
          texto
          url
        }
        titulo
        Jogador {
          nome
          eSport
          time
          foto {
            name
            url
          }
        }
      }
      contato {
        titulo
        email
        logo {
          name
          url
        }
        redesSociais {
          rede
          url
          icone {
            name
            url
          }
        }
      }
      trabalhos {
        titulo
        ativar
        cases {
          titulo
          texto
          Galeria {
            name
            url
          }
        }
      }
    }
  }
`

export default GET_HOME
