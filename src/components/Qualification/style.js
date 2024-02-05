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

export const QualificationContainer = styled.div`
  width: 70%;
`
export const QualificationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const Course = styled.h1`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 18px;
  margin-bottom: 5px;
`
export const Institute = styled.p`
  margin-top: 0px;
  color: #aeacb9;
`
export const Year = styled.p`
  margin-left: 10px;
  color: #aeacb9;
`
export const QualificationChart = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`

export const Calender = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`

export const QualificationRound = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #6e57e0;
  border-radius: 50%;
  color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
`
export const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: #6e57e0;
  transform: translate(6px, -7px);
  color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
`
