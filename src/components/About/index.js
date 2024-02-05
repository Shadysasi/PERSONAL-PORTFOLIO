import {RiFileDownloadFill} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {
  SectionContainer,
  SectionHead,
  SectionPara,
  AboutContainer,
  AboutImg,
  DetailsContainer,
  AboutText,
  ResumeButton,
  ResumeLink,
  Para,
} from './style'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SectionContainer darkMode={isDarkTheme} id="about">
          <SectionHead darkMode={isDarkTheme}>About</SectionHead>
          <SectionPara>My Introduction</SectionPara>
          <AboutContainer>
            <AboutImg
              src="https://harisahmad59.github.io/Hypefolio/Assets/Icons/aboutimg.png"
              alt="about image"
            />
            <DetailsContainer>
              <AboutText>
                An accomplished Frontend Developer with a passion for creating
                seamless user experiences. With a solid foundation in HTML, CSS,
                and JavaScript, I specialize in crafting visually captivating
                and intuitively navigable websites. Leveraging my expertise in
                responsive design, I bring concepts to life, ensuring each
                project is a masterpiece of precision and functionality.
              </AboutText>
              <ResumeButton>
                <ResumeLink href="#">
                  <Para>Download Resume</Para>
                  <RiFileDownloadFill color="#ffffff" size={25} />
                </ResumeLink>
              </ResumeButton>
            </DetailsContainer>
          </AboutContainer>
        </SectionContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
