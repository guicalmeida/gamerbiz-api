import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 40vw;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    text-align: right;
  }
  & a {
    font-weight: 600;
    color: #ffff;
    cursor: pointer;
    text-decoration: underline;
  }
`

export const FormWrapper = styled.div`
  height: 85vh;
  width: 48vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: none;
`
export const Label = styled.label`
  font-weight: 300;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  background-color: transparent;
  color: white;
  border-color: #ff4600;
  border-top: none;
  border-right: none;
  border-width: 1px;
  height: 3.2rem;
  width: 50rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;

  &:focus,
  &:active {
    outline: none;
  }
`
export const Submit = styled.button`
  background-color: transparent;
  color: white;
  font-weight: 300;
  border-radius: 7.46612px;
  width: 8.5rem;
  height: 3rem;
  outline: none;
  border: 1.5px solid #ff4600;
`
export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
`
export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-bottom: 10rem;
  gap: 3rem;

  & > h2 {
    font-size: 5rem;
    font-weight: 900;
    text-transform: uppercase;

    background-color: #ff4600;
    background-image: linear-gradient(270deg, #ff4600 2.77%, #f00000 97.07%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  & > img {
    width: 33rem;
    height: 14.5rem;
  }
  & > p {
    font-weight: 300;
    font-size: 30px;

    text-align: center;

    color: #ffffff;

    text-shadow: 0px 3.39442px 3.39442px rgba(0, 0, 0, 0.25);
  }
`
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const SocialLink = styled.a`
  & > img {
    height: 4rem;
  }
`

export const TextArea = styled.textarea`
  height: 20rem;
  width: 50rem;
  background-color: transparent;
  color: white;
  border-color: #ff4600;
  border-top: none;
  border-right: none;
  border-width: 1px;
  resize: none;
  font-size: 1.2rem;
  margin-top: 2rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;

  &:focus,
  &:active {
    outline: none;
  }
`
