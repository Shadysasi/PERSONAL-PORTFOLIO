import ReactCarousel from '../ReactCarousel'
import ThemeContext from '../../context/ThemeContext'
import {SectionContainer, SectionHead, SectionPara} from './style'

const Projects = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SectionContainer darkMode={isDarkTheme} id="projects">
          <SectionHead darkMode={isDarkTheme}>Projects</SectionHead>
          <SectionPara>Most Recent Works</SectionPara>
          <ReactCarousel />
        </SectionContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Projects
