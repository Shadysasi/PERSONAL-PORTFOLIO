import styled from 'styled-components'

export const SliderContainer = styled.div`
  background-color: transparent;
  padding: 40px;
  width: 70%;
`
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const ProjectImg = styled.img`
  height: 200px;
  border-radius: 20px;
`
export const ProjectDetails = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Title = styled.h1`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  margin-bottom: 10px;
  font-size: 22px;
`
export const Description = styled.p`
  color: #818282;
  line-height: 1.5;
  font-size: 18px;
`

export const ProjectButton = styled.button`
  width: 180px;
  background-color: #6e57e0;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ProjectLink = styled.a`
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
