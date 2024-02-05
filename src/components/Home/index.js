import {GrLinkedinOption} from 'react-icons/gr'
import {IoIosMail} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import {
  HomeSection,
  SocialIconSection,
  SocialIcon,
  ProfileImg,
  ProfileContainer,
  Title,
  Occupation,
  Description,
  ContactButton,
  ContactLink,
  Para,
} from './style'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <HomeSection id="home" darkMode={isDarkTheme}>
          <SocialIconSection>
            <SocialIcon
              href="https://www.linkedin.com/in/sasi5851/"
              target="_blank"
            >
              <GrLinkedinOption size={25} color="#6e57e0" />
            </SocialIcon>
            <SocialIcon href="mailto:sasieng5851@gmail.com" target="_blank">
              <IoIosMail size={25} color="#6e57e0" />
            </SocialIcon>
            <SocialIcon href="https://github.com/Shadysasi" target="_blank">
              <FaGithub size={25} color="#6e57e0" />
            </SocialIcon>
          </SocialIconSection>

          <ProfileImg
            src="https://i.ibb.co/D9WGMTw/64cf2245db643.png"
            alt="profile image"
            border="0"
          />

          <ProfileContainer>
            <Title darkMode={isDarkTheme}>Hi, I am Sasikumar</Title>
            <Occupation>Frontend Developer</Occupation>
            <Description>
              Passionate frontend developer specializing in pixel-perfect web
              design.
            </Description>
            <ContactButton>
              <ContactLink href="#contact">
                <Para>Contact Me</Para>
                <IoIosMail color="#ffffff" size={25} />
              </ContactLink>
            </ContactButton>
          </ProfileContainer>
        </HomeSection>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
