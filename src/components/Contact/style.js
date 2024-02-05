import styled from 'styled-components'

export const SectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: ${props => (props.darkMode ? '#191627' : '#ffffff')};
  font-family: 'Poppins', sans-serif;
`
export const SectionHead = styled.h1`
  text-align: center;
  margin-bottom: 0px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const SectionPara = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #aeacb9;
`
export const ContactContainer = styled.div`
  padding: 30px;
`
export const ContactInfo = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 50px;
`
export const ContactLink = styled.a`
  text-decoration: none;
  color: #818282;
`
export const ContactText = styled.div`
  margin-left: 20px;
`
export const Text = styled.h3`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
