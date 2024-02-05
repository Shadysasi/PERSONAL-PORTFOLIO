import {BsMoon} from 'react-icons/bs'
import {IoSunnyOutline} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'

import {HeaderContainer, NavBar, NavLink, NavList, NavBtn} from './style'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleChange = () => {
        toggleTheme()
      }

      return (
        <HeaderContainer darkMode={isDarkTheme}>
          <NavBar>
            <NavLink darkMode={isDarkTheme}>Sasikumar</NavLink>
            <NavList>
              <NavLink href="#home" darkMode={isDarkTheme}>
                Home
              </NavLink>
              <NavLink href="#about" darkMode={isDarkTheme}>
                About
              </NavLink>
              <NavLink href="#skills" darkMode={isDarkTheme}>
                Skills
              </NavLink>
              <NavLink href="#qualification" darkMode={isDarkTheme}>
                Qualification
              </NavLink>
              <NavLink href="#projects" darkMode={isDarkTheme}>
                Projects
              </NavLink>
              <NavLink href="#contact" darkMode={isDarkTheme}>
                Contact
              </NavLink>
              <NavBtn type="button" onClick={onToggleChange}>
                {isDarkTheme ? (
                  <IoSunnyOutline color="#ffffff" size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </NavBtn>
            </NavList>
          </NavBar>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
