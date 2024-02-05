import styled from 'styled-components'

export const HomeSection = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#191627' : '#ffffff')};
  font-family: '' Poppins ', sans-serif';
`
export const SocialIconSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const SocialIcon = styled.a`
  margin-bottom: 30px;
`
export const ImageContainer = styled.div`
  background-color: #6e57e0;
`
export const ProfileImg = styled.img`
  height: 400px;
  border-radius: 40px;
`
export const ProfileContainer = styled.div``
export const Title = styled.h1`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const Occupation = styled.p`
  color: #aeacb9;
  font-size: 24px;
`
export const Description = styled.p`
  color: #989e9e;
  font-size: 18px;
`
export const ContactButton = styled.button`
  background-color: #6e57e0;
  border-radius: 20px;
  padding: 5px 15px 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
`
export const ContactLink = styled.a`
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
