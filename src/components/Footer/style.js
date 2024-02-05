import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: ${props => (props.darkMode ? '#000000' : '#6e57e0')};
`
export const FooterContent = styled.div`
  color: #ffffff;
`
export const SocialIconSection = styled.div`
  display: flex;
  justify-content:space-between
  align-items: center;
`
export const SocialIcon = styled.a`
  margin-right: 20px;
`
export const NavLink = styled.a`
  text-decoration: none;
  margin-right: 20px;
  color: #ffffff;
`

export const NavList = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`
