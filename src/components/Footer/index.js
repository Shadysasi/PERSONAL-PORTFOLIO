import {FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  FooterContainer,
  FooterContent,
  SocialIconSection,
  SocialIcon,
  NavList,
  NavLink,
} from './style'

const Footer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <FooterContainer darkMode={isDarkTheme}>
          <FooterContent>
            <h1>Sasikumar</h1>
            <span>Frontend Developer</span>
          </FooterContent>
          <NavList>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#home">Portfolio</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavList>
          <SocialIconSection>
            <SocialIcon
              href="https://www.linkedin.com/in/sasi5851/"
              target="_blank"
            >
              <FaLinkedinIn size={25} color="#ffffff" />
            </SocialIcon>
            <SocialIcon href="mailto:sasieng5851@gmail.com" target="_blank">
              <FaInstagram size={25} color="#ffffff" />
            </SocialIcon>
            <SocialIcon href="https://github.com/Shadysasi" target="_blank">
              <FaGithub size={25} color="#ffffff" />
            </SocialIcon>
          </SocialIconSection>
        </FooterContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Footer
