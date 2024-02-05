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
