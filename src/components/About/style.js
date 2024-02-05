import styled from 'styled-components'

export const SectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#191627' : '#ffffff')};
  font-family: 'Poppins', sans-serif;
`
export const SectionHead = styled.h1`
  margin-bottom: 0px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const SectionPara = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #aeacb9;
`
export const AboutContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AboutImg = styled.img`
  width: 400px;
  border: 0.5rem;
  justify-self: center;
  align-items: center;
  margin-right: 30px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const AboutText = styled.p`
  color: #989e9e;
  font-size: 18px;
  line-height: 2;
`
export const ResumeButton = styled.button`
  width: 250px;
  background-color: #6e57e0;
  border-radius: 20px;
  padding: 5px 15px 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
`
export const ResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`
export const Para = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
`
