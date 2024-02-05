import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
`

export const NavBar = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 10px 50px;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`

export const NavList = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
